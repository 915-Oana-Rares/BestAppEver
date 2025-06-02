"use client";
import React, { useState, useEffect } from 'react';
import styles from './BestAppEverInput.module.css';
import { useSearchParams, useRouter } from 'next/navigation';
import { useComics } from '@/context/ComicsProvider';

const BestAppEverInput = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { comicsState, addComic, updateComic } = useComics();

    // Get the action type and comic ID from URL parameters
    const action = searchParams.get('action'); // 'add' or 'update'
    const comicId = searchParams.get('comicId'); // Only present when updating

    // State for form inputs
    const [comicData, setComicData] = useState({
        name: '',
        publisher: '',
        writer: ''
    });

    // If updating, populate the form with the selected comic's data
    useEffect(() => {
        if (action === 'update' && comicId) {
            const selectedComic = comicsState[parseInt(comicId)];
            if (selectedComic) {
                setComicData({
                    name: selectedComic.name || '',
                    publisher: selectedComic.publisher || '',
                    writer: selectedComic.writer || ''
                });
            }
        }
    }, [action, comicId, comicsState]);

    // Handle input changes
    const handleInputChange = (field, value) => {
        setComicData({
            ...comicData,
            [field.toLowerCase()]: value
        });
    };

    // Handle form submission
    const handleConfirm = () => {
        if (action === 'add') {
            // Add a new comic
            addComic(comicData)
        } else if (action === 'update' && comicId) {
            // Update existing comics
            updateComic(comicId, comicData)
        }

        // Navigate back to the main page
        router.push('/');
    };

    const formFields = [
        { key: 'name', label: 'Name' },
        { key: 'publisher', label: 'Publisher' },
        { key: 'writer', label: 'Writer' }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>BEST APP EVER ™</h1>
            <h2 className={styles.subtitle}>{action === 'add' ? 'Add New Comic' : 'Update Comic'}</h2>

            <div className={styles.infoContainer}>
                <div className={styles.infoList}>
                    {formFields.map((field) => (
                        <input
                            key={field.key}
                            type="text"
                            value={comicData[field.key]}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className={styles.infoItem}
                            placeholder={field.label}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.confirmContainer}>
                <div className={styles.confirmButtonWrapper}>
                    <button
                        className={styles.confirmButton}
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                    <button
                        className={styles.cancelButton}
                        onClick={() => router.push('/')}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BestAppEverInput;