// src/server-logger.js
let isRunning = false;

export function startServerLogger(interval = 5000) {
    if (isRunning) return;

    isRunning = true;
    console.log(`[${new Date().toISOString()}] Server logger started`);

    setInterval(() => {
        console.log(`[${new Date().toISOString()}] Server heartbeat - Active connections: ${getActiveConnections()}`);
        // Add other metrics you want to track
    }, interval);
}

function getActiveConnections() {
    // This is a placeholder - implement based on your needs
    return Math.floor(Math.random() * 10);
}