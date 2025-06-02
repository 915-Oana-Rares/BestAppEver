import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./BestAppEver.module.css";
import { useComics } from "@/context/ComicsProvider";

const DisplayArea = ({ comics, onComicClick, selectedComicIndex }) => {
    const { getPublisherColor } = useComics();
    const [visibleComics, setVisibleComics] = useState([]);
    const [loading, setLoading] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(3); // Initial number of comics to show
    const observerTarget = useRef(null);

    // Initialize visible comics on component mount or when comics array changes
    useEffect(() => {
        setVisibleComics(comics.slice(0, itemsToShow));
    }, [comics, itemsToShow]);

    // Load more comics function
    const loadMoreComics = useCallback(() => {
        if (loading || visibleComics.length >= comics.length) return;

        setLoading(true);
        setTimeout(() => {
            const nextItems = Math.min(itemsToShow + 3, comics.length);
            setItemsToShow(nextItems);
            setLoading(false);
        }, 500); // Simulate loading delay
    }, [loading, visibleComics.length, comics.length, itemsToShow]);

    // Setup intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreComics();
                }
            },
            { threshold: 0.1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [loadMoreComics]);

    return (
        <div className={styles.displayArea}>
            <div className={styles.displayContent}>
                {visibleComics.map((comic, index) => (
                    <div key={index}
                         onClick={() => onComicClick(index)}
                         className={`${styles.comicItem} ${index === selectedComicIndex ? styles.selectedComic : ""}`}
                         style={{ backgroundColor: getPublisherColor(comic.publisher) }}>
                        <h2>{comic.name}</h2>
                        <p>Publisher: {comic.publisher}</p>
                        <p>Writer: {comic.writer}</p>
                    </div>
                ))}
                {visibleComics.length < comics.length && (
                    <div ref={observerTarget} className={styles.loadingIndicator}>
                        {loading ? "Loading more comics..." : "Scroll for more"}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DisplayArea;