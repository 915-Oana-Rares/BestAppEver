// src/context/AuthProvider.js
'use client'
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        try {
            // In a real app, validate against your API
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const userData = await response.json();
            setUser(userData);
            router.push('/');
        } catch (err) {
            setError(err.message || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);