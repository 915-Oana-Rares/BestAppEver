import React from 'react';
import styles from './BestAppEverInput.module.css';

const InfoItem = ({ text }) => {
    return (
        <div className={styles.infoItem}>
            <span className={styles.infoLabel}>{text}:</span>
        </div>
    );
};

export default InfoItem;