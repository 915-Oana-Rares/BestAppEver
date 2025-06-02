// src/app/api/auth/login/route.js
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const { email, password } = await request.json()

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            )
        }

        const user = await prisma.user.findUnique({
            where: { email },
            include: { Admin: true }
        })

        if (!user || user.password !== password) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            )
        }

        // Return user data (in a real app, you would create a session or JWT)
        return NextResponse.json({
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: !!user.Admin
        })

    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { message: 'Authentication failed' },
            { status: 500 }
        )
    }
}