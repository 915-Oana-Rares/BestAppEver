// src/components/BestAppEver/SuspiciousUsersList.jsx
import React, { useState, useEffect } from 'react';
import styles from './BestAppEver.module.css';
import { useAuth } from '@/context/AuthProvider';

const SuspiciousUsersList = () => {
    const [suspiciousUsers, setSuspiciousUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchSuspiciousUsers = async () => {
            if (!user?.id) return;

            setLoading(true);
            try {
                const response = await fetch(`/api/admin/suspicious_users?userId=${user.id}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch suspicious users');
                }

                const data = await response.json();
                setSuspiciousUsers(data);
            } catch (err) {
                console.error('Error fetching suspicious users:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (user?.isAdmin) {
            fetchSuspiciousUsers();

            const intervalId = setInterval(() => {
                fetchSuspiciousUsers();
            }, 10000);

            return () => clearInterval(intervalId);

        }
    }, [user]);

    if (!user?.isAdmin) return null;

    return (
        <div className={styles.suspiciousUsersContainer}>
            <h3>Suspicious Users List</h3>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className={styles.error}>{error}</p>
            ) : (
                <table className={styles.suspiciousUsersTable}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {suspiciousUsers.length > 0 ? (
                        suspiciousUsers.map((item) => (
                            <tr key={item.id}>
                                <td>{item.user.name}</td>
                                <td>{item.user.email}</td>
                                <td>{item.user.id}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No suspicious users found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SuspiciousUsersList;