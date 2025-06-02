// __tests__/api/comics.test.js
import { NextRequest } from 'next/server';
import { GET, POST } from '@/app/api/comics/route';
import { GET as GETById, PUT, DELETE } from '@/app/api/comics/[index]/route';
import { comics } from '@/mockData';

// Mock the comicsData for testing
jest.mock('@/src/app/api/comics/route', () => {
    const originalModule = jest.requireActual('@/src/app/api/comics/route');
    return {
        ...originalModule,
        comicsData: [
            { name: "Spiderman", publisher: "Marvel", writer: "Stan Lee" },
            { name: "Batman", publisher: "DC", writer: "Bob Kane" },
            { name: "Ironman", publisher: "Marvel", writer: "Stan Lee" },
            { name: "Wonder Woman", publisher: "DC", writer: "William Moulton Marston" },
            { name: "Captain America", publisher: "Marvel", writer: "Joe Simon" },
        ]
    };
});

// Helper to create mock requests
const createRequest = (url, method = 'GET', body = null) => {
    const request = new NextRequest(url, { method });
    if (body) {
        request.json = jest.fn().mockResolvedValue(body);
    }
    return request;
};

describe('Comics API', () => {
    beforeEach(() => {
        // Reset comicsData before each test
        jest.resetModules();
        require('@/src/app/api/comics/route').comicsData = [
            { name: "Spiderman", publisher: "Marvel", writer: "Stan Lee" },
            { name: "Batman", publisher: "DC", writer: "Bob Kane" },
            { name: "Ironman", publisher: "Marvel", writer: "Stan Lee" },
            { name: "Wonder Woman", publisher: "DC", writer: "William Moulton Marston" },
            { name: "Captain America", publisher: "Marvel", writer: "Joe Simon" },
        ];
    });

    describe('GET /api/comics', () => {
        it('should return all comics', async () => {
            const req = createRequest('http://localhost:3000/api/comics');
            const res = await GET(req);
            const data = await res.json();

            expect(res.status).toBe(200);
            expect(data).toHaveLength(comics.length);
            expect(data).toEqual(expect.arrayContaining(comics));
        });

        it('should filter comics by publisher', async () => {
            const req = createRequest('http://localhost:3000/api/comics?publisher=Marvel');
            const res = await GET(req);
            const data = await res.json();

            expect(res.status).toBe(200);
            expect(data.every(comic => comic.publisher === 'Marvel')).toBeTruthy();
        });

        it('should filter comics by writer', async () => {
            const req = createRequest('http://localhost:3000/api/comics?writer=Stan Lee');
            const res = await GET(req);
            const data = await res.json();

            expect(res.status).toBe(200);
            expect(data.every(comic => comic.writer === 'Stan Lee')).toBeTruthy();
        });

        it('should sort comics by name ascending', async () => {
            const req = createRequest('http://localhost:3000/api/comics?sortBy=name&sortOrder=asc');
            const res = await GET(req);
            const data = await res.json();

            expect(res.status).toBe(200);

            // Check if sorted correctly
            const sortedData = [...comics].sort((a, b) => a.name.localeCompare(b.name));
            expect(data.map(comic => comic.name)).toEqual(sortedData.map(comic => comic.name));
        });

        it('should sort comics by name descending', async () => {
            const req = createRequest('http://localhost:3000/api/comics?sortBy=name&sortOrder=desc');
            const res = await GET(req);
            const data = await res.json();

            expect(res.status).toBe(200);

            // Check if sorted correctly
            const sortedData = [...comics].sort((a, b) => b.name.localeCompare(a.name));
            expect(data.map(comic => comic.name)).toEqual(sortedData.map(comic => comic.name));
        });

        it('should combine filtering and sorting', async () => {
            const req = createRequest('http://localhost:3000/api/comics?publisher=Marvel&sortBy=name&sortOrder=desc');
            const res = await GET(req);
            const data = await res.json();

            expect(res.status).toBe(200);

            // Check filtering
            expect(data.every(comic => comic.publisher === 'Marvel')).toBeTruthy();

            // Check sorting
            const filteredAndSorted = comics
                .filter(comic => comic.publisher === 'Marvel')
                .sort((a, b) => b.name.localeCompare(a.name));

            expect(data.map(comic => comic.name)).toEqual(filteredAndSorted.map(comic => comic.name));
        });
    });

    describe('POST /api/comics', () => {
        it('should add a new comic', async () => {
            const newComic = { name: "X-Men", publisher: "Marvel", writer: "Chris Claremont" };
            const req = createRequest('http://localhost:3000/api/comics', 'POST', newComic);

            const res = await POST(req);
            const data = await res.json();

            expect(res.status).toBe(201);
            expect(data).toEqual(newComic);

        });
    });

    describe('GET /api/comics/[index]', () => {
        it('should return a specific comic by index', async () => {
            const req = createRequest('http://localhost:3000/api/comics/1');
            const res = await GETById(req, { params: { index: '1' } });
            const data = await res.json();

            expect(res.status).toBe(200);
            expect(data).toEqual(comics[1]);
        });

        it('should return 404 for non-existent index', async () => {
            const req = createRequest('http://localhost:3000/api/comics/999');
            const res = await GETById(req, { params: { index: '999' } });

            expect(res.status).toBe(404);
        });
    });

    describe('PUT /api/comics/[index]', () => {
        it('should update a comic', async () => {
            const updatedComic = { name: "Batman: Year One" };
            const req = createRequest('http://localhost:3000/api/comics/1', 'PUT', updatedComic);

            const res = await PUT(req, { params: { index: '1' } });
            const data = await res.json();

            expect(res.status).toBe(200);
            expect(data.name).toBe("Batman: Year One");
            expect(data.publisher).toBe(comics[1].publisher); // Should keep existing fields
        });

        it('should return 404 for non-existent index', async () => {
            const req = createRequest('http://localhost:3000/api/comics/999', 'PUT', { name: "Test" });
            const res = await PUT(req, { params: { index: '999' } });

            expect(res.status).toBe(404);
        });
    });

    describe('DELETE /api/comics/[index]', () => {
        it('should delete a comic', async () => {
            const req = createRequest('http://localhost:3000/api/comics/1', 'DELETE');
            const { comicsData } = require('@/src/app/api/comics/route');
            const comicToDelete = { name: 'Batman: Year One', publisher: 'DC', writer: 'Bob Kane' }

            const len = comicsData.length;
            const res = await DELETE(req, { params: { index: '1' } });
            const data = await res.json();

            expect(res.status).toBe(200);
            expect(data).toEqual(comicToDelete);

            // Check if comic was removed from the array
            expect(comicsData).not.toContainEqual(comicToDelete);
        });

        it('should return 404 for non-existent index', async () => {
            const req = createRequest('http://localhost:3000/api/comics/999', 'DELETE');
            const res = await DELETE(req, { params: { index: '999' } });

            expect(res.status).toBe(404);
        });
    });
});