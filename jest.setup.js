import '@testing-library/jest-dom';

// Mock Next.js response
jest.mock('next/server', () => {
    return {
        NextResponse: {
            json: (data, options = {}) => {
                return {
                    status: options.status || 200,
                    headers: new Map(),
                    json: async () => data,
                };
            },
        },
        NextRequest: class {
            constructor(url, init = {}) {
                this.url = url;
                this.method = init.method || 'GET';
                this.json = init.json || (() => Promise.resolve({}));
            }
        },
    };
});