
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

// Get comic by name
export async function GET(request, { params }) {
    try {
        const name = decodeURIComponent((await params).index)

        const comic = await prisma.comic.findUnique({
            where: { name }
        })

        if (!comic) {
            return NextResponse.json(
                { error: 'Comic not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(comic)
    } catch (error) {
        console.error('Error fetching comic:', error)
        return NextResponse.json(
            { error: 'Failed to fetch comic' },
            { status: 500 }
        )
    }
}

// Update comic by name
export async function PUT(request, { params }) {
    try {
        const name = decodeURIComponent((await params).index);
        const data = await request.json();

        // Get the user ID from the request
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID is required' },
                { status: 400 }
            );
        }

        // Update the comic
        const updatedComic = await prisma.comic.update({
            where: { name },
            data: data,
        });

        // Record this operation
        await prisma.userOperation.create({
            data: {
                userId,
                comicName: name,
                operation: 'UPDATE'
            }
        });

        return NextResponse.json(updatedComic);
    } catch (error) {
        console.error('Error updating comic:', error);

        if (error.code === 'P2025') {
            return NextResponse.json(
                { error: 'Comic not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to update comic' },
            { status: 500 }
        );
    }
}

// Delete comic by name
export async function DELETE(request, { params }) {
    try {
        const name = decodeURIComponent((await params).index);

        // Get the user ID from the request
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID is required' },
                { status: 400 }
            );
        }

        // Find the UserComic record for this user and comic
        const userComic = await prisma.userComic.findFirst({
            where: {
                userId: userId,
                comicName: name
            }
        });

        if (!userComic) {
            return NextResponse.json(
                { error: 'Comic not found in your collection' },
                { status: 404 }
            );
        }

        // Delete the UserComic record instead of the Comic
        const deletedUserComic = await prisma.userComic.delete({
            where: {
                id: userComic.id
            }
        });

        // Record this operation
        await prisma.userOperation.create({
            data: {
                userId,
                comicName: name,
                operation: 'DELETE'
            }
        });

        return NextResponse.json({
            message: 'Comic removed from your collection',
            deletedUserComic
        });
    } catch (error) {
        console.error('Error deleting comic:', error);

        return NextResponse.json(
            { error: 'Failed to remove comic from collection' },
            { status: 500 }
        );
    }
}