import React, { useState, useEffect } from 'react';
import styles from './BestAppEver.module.css';

const NewComicIndicator = ({ isVisible, onAnimationEnd }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                if (onAnimationEnd) onAnimationEnd();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, onAnimationEnd]);

    if (!visible) return null;

    return (
        <div className={styles.newComicIndicator}>
            <span>New Comic Added!</span>
        </div>
    );
};

export default NewComicIndicator;