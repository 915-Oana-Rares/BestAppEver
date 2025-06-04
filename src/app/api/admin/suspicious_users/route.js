// src/app/api/admin/suspicious-users/route.js
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { startServerLogger } from '@/server-logger'

startServerLogger();

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        // Verify the user is an admin
        const admin = await prisma.admin.findFirst({
            where: { userId }
        });

        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
        }

        // Fetch suspicious users with their details
        const suspiciousUsers = await prisma.suspiciousUser.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });

        return NextResponse.json(suspiciousUsers);
    } catch (error) {
        console.error('Error fetching suspicious users:', error);
        return NextResponse.json(
            { error: 'Failed to fetch suspicious users' },
            { status: 500 }
        );
    }
}