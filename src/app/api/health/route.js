import { NextResponse } from 'next/server';
import { startComicGenerator } from '@/services/comicGenerator';


export async function GET() {

    if (typeof startComicGenerator === 'function') {
        // startComicGenerator();
    }

    return NextResponse.json(
        { status: 'ok', timestamp: new Date().toISOString() },
        { status: 200 }
    );
}