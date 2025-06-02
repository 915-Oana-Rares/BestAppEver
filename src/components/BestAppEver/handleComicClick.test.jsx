import { handleComicClick } from './handleComicClick';

describe('handleComicClick', () => {
    test('should set correct indices', () => {
        const setSelectedComicIndex = jest.fn();
        const setComicIndex = jest.fn();

        const comicsState = [
            {name: 'Batman', publisher: 'DC Comics' },
            {name: 'Spider-Man', publisher: 'Marvel' },
            {name: 'Superman', publisher: 'DC Comics' }
        ];

        const filteredComics = comicsState.filter(comic => comic.publisher === 'DC Comics');

        // Call the function with index 1 (Superman)
        handleComicClick(1, filteredComics, comicsState, setSelectedComicIndex, setComicIndex);

        // Check that state setters were called correctly
        expect(setSelectedComicIndex).toHaveBeenCalledWith(1);
        expect(setComicIndex).toHaveBeenCalledWith(2);

    });
});