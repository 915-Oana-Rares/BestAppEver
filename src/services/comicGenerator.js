import prisma from '@/lib/prisma';
import { generateRandomComic } from '@/app/api/socket/route';

export const startComicGenerator = () => {
    if (global.generatorStarted)
        return;

    global.generatorStarted = true;

    console.log('Starting comic generator service...');

    setInterval(async () => {
        try {
            // Generate a new unique comic
            const newComic = generateRandomComic();

            // Check if the comic with this name already exists to prevent PK conflicts
            const existingComic = await prisma.comic.findUnique({
                where: { name: newComic.name }
            });

            if (!existingComic) {
                // Create the new comic in the database
                const createdComic = await prisma.comic.create({
                    data: newComic
                });

                // Emit the new comic via WebSocket
                if (global.io) {
                    global.io.emit('newComic', createdComic);
                }

                console.log('Generated and saved new comic:', createdComic);
            } else {
                console.log('Generated comic name already exists, skipping...');
            }
        } catch (error) {
            console.error('Error generating new comic:', error);
        }
    }, 10000);  // 10 seconds
};