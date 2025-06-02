// src/app/login/page.js
'use client'
import { useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import Link from 'next/link';
import ActionButton from '@/components/BestAppEver/ActionButton';
import Title from '@/components/BestAppEver/Title';
import styles from './login.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && password) {
            await login(email, password);
        }
    };

    const handleLoginClick = () => {
        if (email && password) {
            login(email, password);
        }
    };

    return (
        <div className={styles.container}>
            <Title />
            <div className={styles.loginForm}>
                {error && <div className={styles.errorMessage}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Your email"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Your password"
                        />
                    </div>

                    <ActionButton
                        label={loading ? 'Logging in...' : 'Login'}
                        onClick={handleLoginClick}
                    />
                </form>

                <div className={styles.links}>
                    <Link href="/">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}