'use client'
import React, {createContext, useContext, useEffect, useState, useCallback} from "react";
import {useConnectionStatus} from "@/hooks/useConnectionStatus";
import { io } from 'socket.io-client';
import { useRef } from 'react';
import prisma from "@/lib/prisma";
import {useAuth} from "@/context/AuthProvider";
const ComicsContext = createContext();

export const ComicsProvider = ({ children }) => {
    const [comicsState, setComicsState] = useState([]); // Start with empty state, will be filled from API
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({});
    const [sortConfig, setSortConfig] = useState({ sortBy: 'name', sortOrder: 'asc' });
    const [pendingChanges, setPendingChanges] = useState([]);
    const { isOnline, isServerAvailable, checkStatus } = useConnectionStatus('api/health');
    const publisherColorsRef = React.useRef({'DC':{nr: 0, color:'rgb(90, 201, 223)'}, 'Marvel':{nr: 0, color:'rgb(255, 93, 62)'}});
    const publisherNrOfComicsRef = React.useRef({});
    const { user } = useAuth();
    const socketRef = useRef(null);

    useEffect(() => {
        // Only connect on client-side
        if (typeof window !== 'undefined') {
            // Connect to WebSocket server
            // socketRef.current = io('http://localhost:3001');

            // Listen for new comics
            socketRef.current.on('newComic', (newComic) => {
                console.log('Received new comic:', newComic);

                // Add the new comic to our state
                setComicsState(prevState => [...prevState, newComic]);

                // Also update localStorage
                const localData = getFromLocalStorage() || [];
                saveToLocalStorage([...localData, newComic]);

                // Update publisher counts for charts
                const publisher = newComic.publisher;
                if (publisherColorsRef.current[publisher]) {
                    publisherColorsRef.current[publisher].nr += 1;
                } else {
                    publisherColorsRef.current[publisher] = {
                        nr: 1,
                        color: getPublisherColor(publisher)
                    };
                }

                if (publisherNrOfComicsRef.current[publisher]) {
                    publisherNrOfComicsRef.current[publisher][0] += 1;
                } else {
                    publisherNrOfComicsRef.current[publisher] = [1];
                }
            });

            // Clean up on unmount
            return () => {
                if (socketRef.current) {
                    socketRef.current.disconnect();
                }
            };
        }
    }, []);

    // Save to local storage
    const saveToLocalStorage = useCallback((data) => {
        try {
            localStorage.setItem('comics-data', JSON.stringify(data));
        } catch (err) {
            console.error('Failed to save to local storage:', err);
        }
    }, []);

    // Get from local storage
    const getFromLocalStorage = useCallback(() => {
        try {
            const data = localStorage.getItem('comics-data');
            return data ? JSON.parse(data) : null;
        } catch (err) {
            console.error('Failed to get from local storage:', err);
            return null;
        }
    }, []);

    // Fetch comics with filters and sorting
// Fetch comics with filters and sorting
    const fetchComics = useCallback(async (filterParams = {}, sortParams = {}) => {
        setLoading(true);

        // If not logged in, don't fetch any comics
        if (!user?.id) {
            setComicsState([]);
            setLoading(false);
            return;
        }

        // If offline or server unavailable, use local data
        if (!isOnline || !isServerAvailable) {
            const localData = getFromLocalStorage();
            if (localData) {
                // Apply filters locally
                let filteredData = [...localData];

                // Filter
                for (const [key, value] of Object.entries(filterParams)) {
                    if (value) {
                        filteredData = filteredData.filter(comic =>
                            comic[key].toLowerCase().includes(value.toLowerCase())
                        );
                    }
                }

                // Sort
                if (sortParams.sortBy) {
                    filteredData.sort((a, b) => {
                        if (typeof a[sortParams.sortBy] === 'string') {
                            const comparison = a[sortParams.sortBy].localeCompare(b[sortParams.sortBy]);
                            return sortParams.sortOrder.toLowerCase() === 'desc' ? -comparison : comparison;
                        }
                        const comparison = a[sortParams.sortBy] - b[sortParams.sortBy];
                        return sortParams.sortOrder.toLowerCase() === 'desc' ? -comparison : comparison;
                    });
                }

                setComicsState(filteredData);
                setLoading(false);
                return;
            }
        }

        try {
            const params = new URLSearchParams();

            // Add user ID to params
            params.append('userId', user.id);

            // Add filter params
            Object.entries(filterParams).forEach(([key, value]) => {
                if (value) params.append(key, value);
            });

            // Add sort params
            if (sortParams.sortBy) {
                params.append('sortBy', sortParams.sortBy);
                params.append('sortOrder', sortParams.sortOrder || 'asc');
            }

            const queryString = params.toString();
            const url = `/api/comics${queryString ? `?${queryString}` : ''}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch comics');
            }

            const data = await response.json();
            setComicsState(data);

            // Save to local storage for offline use
            saveToLocalStorage(data);

            const publisherCounts = {};
            data.forEach((comic) => {
                if (!publisherCounts[comic.publisher]) {
                    publisherCounts[comic.publisher] = 0;
                }
                publisherCounts[comic.publisher]++;

                if (publisherColorsRef.current[comic.publisher]) {
                    publisherColorsRef.current[comic.publisher].nr = publisherCounts[comic.publisher];
                }
            });

            Object.keys(publisherCounts).forEach((key) => {
                publisherNrOfComicsRef.current[key] = [publisherCounts[key]];
            });

            setLoading(false);
        } catch (err) {
            // If fetch fails, try to use local data
            const localData = getFromLocalStorage();
            if (localData) {
                setComicsState(localData);
            }
            setError(err.message);
            setLoading(false);
        }
    }, [isOnline, isServerAvailable, getFromLocalStorage, saveToLocalStorage, publisherColorsRef.current, publisherNrOfComicsRef.current, user?.id]);

    // Sync pending changes when back online
    useEffect(() => {
        if (isOnline && isServerAvailable && pendingChanges.length > 0) {
            const syncChanges = async () => {
                for (const change of pendingChanges) {
                    try {
                        if (change.type === 'update') {
                            await fetch(`/api/comics/${change.index}`, {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(change.data),
                            });
                        } else if (change.type === 'delete') {
                            await fetch(`/api/comics/${change.index}`, {
                                method: 'DELETE',
                            });
                        } else if (change.type === 'add') {
                            await fetch('/api/comics', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(change.data),
                            });
                        }
                    } catch (err) {
                        console.error(`Failed to sync ${change.type} operation:`, err);
                    }
                }
                setPendingChanges([]);
                fetchComics(filters, sortConfig); // Refresh data
            };

            syncChanges();
        }
    }, [isOnline, isServerAvailable, pendingChanges, fetchComics, filters, sortConfig]);

    // Initial fetch on component mount
    useEffect(() => {
        fetchComics();
    }, [fetchComics]);

    // Re-fetch when filters or sort config changes
    useEffect(() => {
        fetchComics(filters, sortConfig);
    }, [filters, sortConfig, fetchComics]);

    // Update filters
    const updateFilters = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    // Update sort config
    const updateSortConfig = (sortBy = 'name', sortOrder = 'asc') => {
        setSortConfig({ sortBy, sortOrder });
    };

    // Reset filters and sorting
    const resetFiltersAndSort = () => {
        setFilters({});
        setSortConfig({ sortBy: "name", sortOrder: 'asc' });
    };

    const getPublisherHistory = (publisher) => {
        return publisherColorsRef.current[publisher]
    };

    const getPublisherColor = (publisher) => {
        if (!publisherColorsRef.current[publisher]) {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            publisherColorsRef.current[publisher] = {nr: 1, color};
        }
        return publisherColorsRef.current[publisher].color;
    };

    const getWritersWithComicCount = () => {
        return comicsState.reduce((acc, comic) => {
            if (acc[comic.writer]) {
                acc[comic.writer]++;
            } else {
                acc[comic.writer] = 1;
            }
            return acc;
        }, {});
    };

    // API-connected CRUD operations with offline support
    const updateComic = async (comicIndex, updatedComic) => {
        // If offline, update local state and queue change
        if (!isOnline || !isServerAvailable) {
            const localData = getFromLocalStorage() || [];
            if (comicIndex >= 0 && comicIndex < localData.length) {
                localData[comicIndex] = { ...localData[comicIndex], ...updatedComic };
                saveToLocalStorage(localData);
                setComicsState(prevState => {
                    const newState = [...prevState];
                    newState[comicIndex] = { ...newState[comicIndex], ...updatedComic };
                    return newState;
                });
                setPendingChanges(prev => [...prev, { type: 'update', index: comicIndex, data: updatedComic }]);
                return { ...comicsState[comicIndex], ...updatedComic };
            }
            return null;
        }

        try {
            // Get the user ID from auth context

            if (!user || !user.id) {
                throw new Error('You must be logged in to perform this action');
            }

            const name = encodeURIComponent(comicsState[comicIndex].name);
            const response = await fetch(`/api/comics/${name}?userId=${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedComic),
            });


            if (!response.ok) {
                throw new Error('Failed to update comic');
            }

            const updated = await response.json();

            // Refresh comics from API to get latest state
            fetchComics(filters, sortConfig);

            return updated;
        } catch (err) {
            console.error("Error updating comic:", err);
            return null;
        }
    };

    const deleteComic = async (comicIndex) => {
        // If offline, update local state and queue change
        if (!isOnline || !isServerAvailable) {
            const localData = getFromLocalStorage() || [];
            if (comicIndex >= 0 && comicIndex < localData.length) {
                const deletedComic = localData[comicIndex];
                localData.splice(comicIndex, 1);
                saveToLocalStorage(localData);
                setComicsState(prevState => {
                    const newState = [...prevState];
                    newState.splice(comicIndex, 1);
                    return newState;
                });
                setPendingChanges(prev => [...prev, { type: 'delete', index: comicIndex }]);
                return deletedComic;
            }
            return null;
        }

        try {
            // Get the user ID from auth context

            if (!user || !user.id) {
                throw new Error('You must be logged in to perform this action');
            }

            const name = encodeURIComponent(comicsState[comicIndex].name);
            const response = await fetch(`/api/comics/${name}?userId=${user.id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to remove comic from collection');
            }

            const deleted = await response.json();

            // Refresh comics from API to get latest state
            fetchComics(filters, sortConfig);

            return deleted;
        } catch (err) {
            console.error("Error deleting comic:", err);
            return null;
        }
    };

    const addComic = async (newComic) => {
        // If offline, update local state and queue change
        if (!isOnline || !isServerAvailable) {
            const localData = getFromLocalStorage() || [];
            localData.push(newComic);
            saveToLocalStorage(localData);
            setComicsState(prevState => [...prevState, newComic]);
            setPendingChanges(prev => [...prev, { type: 'add', data: newComic }]);
            return newComic;
        }

        try {
            const response = await fetch('/api/comics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComic),
            });

            if (!response.ok) {
                throw new Error('Failed to add comic');
            }

            const added = await response.json();

            // Refresh comics from API to get latest state
            fetchComics(filters, sortConfig);

            return added;
        } catch (err) {
            console.error("Error adding comic:", err);
            return null;
        }
    };

    return (
        <ComicsContext.Provider value={{
            comicsState,
            loading,
            error,
            filters,
            sortConfig,
            updateFilters,
            updateSortConfig,
            resetFiltersAndSort,
            getPublisherColor,
            publisherColorsRef,
            getPublisherHistory,
            getWritersWithComicCount,
            updateComic,
            deleteComic,
            addComic,
            refetchComics: () => fetchComics(filters, sortConfig),
            isOnline,
            isServerAvailable,
            checkStatus,
            pendingChanges,
        }}>
            {children}
        </ComicsContext.Provider>
    );
};

export const useComics = () => useContext(ComicsContext);