import React from 'react';
import styles from './BestAppEver.module.css';

const ConnectionStatus = ({ isOnline, isServerAvailable, checkStatus, pendingChanges }) => {
    if (isOnline === null || isServerAvailable === null) {
        return null;
    }

    const hasPendingChanges = pendingChanges && pendingChanges.length > 0;

    return (
        <div className={styles.connectionContainer}>
            <div className={styles.statusIndicator}>
                <span>Network: </span>
                <span className={isOnline ? styles.online : styles.offline}>
                    {isOnline ? 'Connected' : 'Disconnected'}
                </span>
            </div>

            <div className={styles.statusIndicator}>
                <span>Server: </span>
                <span className={isServerAvailable ? styles.online : styles.offline}>
                    {isServerAvailable ? 'Available' : 'Unavailable'}
                </span>
            </div>

            <div className={styles.statusIndicator}>
                <span>Sync Status: </span>
                <span className={!hasPendingChanges ? styles.online : styles.offline}>
                    {hasPendingChanges
                        ? `Waiting to sync (${pendingChanges.length} ${pendingChanges.length === 1 ? 'change' : 'changes'})`
                        : 'Synced'}
                </span>
            </div>

            <button
                className={styles.actionButton}
                onClick={checkStatus}
                style={{
                    margin: 'auto',
                    padding: '5px 10px 5px 10px',
                    fontSize: '14px',
                }}>
                Refresh Status
            </button>
        </div>
    );
};

export default ConnectionStatus;