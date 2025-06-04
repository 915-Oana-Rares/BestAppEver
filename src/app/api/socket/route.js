import { Server } from 'socket.io';
import { NextResponse } from 'next/server';

const publishers = ['DC', 'Marvel','Dark Horse'];
const writers = ['Stan Lee', 'Bob Kane', 'Gardner Fox', 'Alan Moore', 'Neil Gaiman', 'Frank Miller'];

let io;

export async function GET(req) {
    return NextResponse.json({ status: 'WebSocket server is running' });
}

export function generateRandomComic() {
    const name = `New Comic #${Math.floor(Math.random() * 1000)}`;
    const publisher = publishers[Math.floor(Math.random() * publishers.length)];
    const writer = writers[Math.floor(Math.random() * writers.length)];

    return { name, publisher, writer };
}

if (typeof global.io === 'undefined') {
    // Initialize Socket.IO only once
    global.io = new Server({
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io = global.io;

    io.on('connection', (socket) => {
        console.log('Client connected:', socket.id);

        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });

    // if (!global.generationInterval) {
    //     global.generationInterval = setInterval(() => {
    //         const newComic = generateRandomComic();
    //
    //         if (global.comicsData) {
    //             global.comicsData.push(newComic);
    //         }
    //
    //         io.emit('newComic', newComic);
    //         console.log('Generated new comic:', newComic);
    //     }, 10000); // Generate a new comic every 10 seconds
    // }

    // Start the server on the specified port
    //io.listen(3001);
    // console.log('Socket.IO server started on port 3001');
}

export { io };