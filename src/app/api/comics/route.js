// src/app/api/comics/route.js
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

// src/app/api/comics/route.js
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID is required' },
                { status: 400 }
            );
        }

        // Get filters and sorting
        const publisher = searchParams.get('publisher');
        const name = searchParams.get('name');
        const writer = searchParams.get('writer');
        const sortBy = searchParams.get('sortBy') || 'name';
        const sortOrder = searchParams.get('sortOrder') || 'asc';

        // Build the where clause for filtering
        const where = {
            UserComic: {
                some: {
                    userId: userId
                }
            }
        };

        if (publisher) where.publisher = { contains: publisher };
        if (name) where.name = { contains: name };
        if (writer) where.writer = { contains: writer };

        // Query comics with filters
        const comics = await prisma.comic.findMany({
            where,
            orderBy: {
                [sortBy]: sortOrder.toLowerCase()
            }
        });

        return NextResponse.json(comics);
    } catch (error) {
        console.error('Error fetching comics:', error);
        return NextResponse.json(
            { error: 'Failed to fetch comics' },
            { status: 500 }
        );
    }
}
export async function POST(request) {
    try {
        const data = await request.json()

        // Validate required fields
        if (!data.name || !data.publisher || !data.writer) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Create new comic in database
        const newComic = await prisma.comic.create({
            data: {
                name: data.name,
                publisher: data.publisher,
                writer: data.writer
            }
        })

        return NextResponse.json(newComic, { status: 201 })
    } catch (error) {
        console.error('Error creating comic:', error)

        // Handle unique constraint violation
        if (error.code === 'P2002') {
            return NextResponse.json(
                { error: 'Comic with this name already exists' },
                { status: 409 }
            )
        }

        return NextResponse.json(
            { error: 'Failed to create comic' },
            { status: 500 }
        )
    }
}