export const handleComicClick = (index, filteredComics, comicsState, setSelectedComicIndex, setComicIndex) => {
    // console.log("Clicked comic index from selected:", index);
    // console.log("Selected comic index:", comicsState.indexOf(filteredComics[index]));
    // console.log("Clicked comic:", filteredComics[index]);
    setSelectedComicIndex(index);
    setComicIndex(comicsState.indexOf(filteredComics[index]));
};