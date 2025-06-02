import { useState, useEffect, useCallback } from 'react';

export const useConnectionStatus = (serverUrl = 'api/health') => {
    // Use null as initial values for server-side rendering
    const [isOnline, setIsOnline] = useState(null);
    const [isServerAvailable, setIsServerAvailable] = useState(null);
    const [lastChecked, setLastChecked] = useState(null);

    // Check server status
    const checkServerStatus = useCallback(async () => {
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            setIsServerAvailable(false);
            return;
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            const response = await fetch(serverUrl, {
                method: 'GET',
                headers: { 'Cache-Control': 'no-cache' },
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            setIsServerAvailable(response.ok);
            setLastChecked(new Date());
        } catch (error) {
            console.error('Server status check failed:', error);
            setIsServerAvailable(false);
            setLastChecked(new Date());
        }
    }, [serverUrl]);

    // Initialize values only on client side
    useEffect(() => {
        // Set initial values on client side
        setIsOnline(navigator.onLine);

        const handleOnline = () => {
            setIsOnline(true);
            checkServerStatus();
        };

        const handleOffline = () => {
            setIsOnline(false);
            setIsServerAvailable(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        checkServerStatus();
        const intervalId = setInterval(checkServerStatus, 30000);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            clearInterval(intervalId);
        };
    }, [checkServerStatus]);

    return {
        isOnline,
        isServerAvailable,
        lastChecked,
        checkStatus: checkServerStatus
    };
};