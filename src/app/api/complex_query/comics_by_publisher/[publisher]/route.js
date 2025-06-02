// src/app/api/complex_query/comics_by_publisher/[publisher]
import prisma from '@/lib/prisma'
import {NextResponse} from "next/server";

// All comics by publisher
export async function GET(request, { params }) {
        const publisherName =  decodeURIComponent((await params).publisher);
        const comics = await prisma.$queryRawUnsafe('Select * from Comic where Comic.publisher = $1',publisherName);

        if (comics.length === 0) {
                return NextResponse.json(
                    { error: 'Publisher not found' },
                    { status: 404 }
                )
        }
        return NextResponse.json(comics)

}