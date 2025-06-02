// app/api/video/route.js
import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Path to your video file in the public directory
        const videoPath = path.join(process.cwd(), 'public', 'videos', 'comics-video.mp4');

        // Read the file
        const videoBuffer = await readFile(videoPath);

        // Create the response with appropriate headers
        const response = new NextResponse(videoBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'video/mp4',
                'Content-Disposition': 'attachment; filename=comics-video.mp4',
            },
        });

        return response;
    } catch (error) {
        console.error('Error serving video:', error);
        return NextResponse.json(
            { error: 'Failed to serve video' },
            { status: 500 }
        );
    }
}