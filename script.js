function getSize() {
    gridSize = prompt("Please enter grid size under 100: ")
    if (gridSize < 100) {
        return gridSize;
    } else {
        alert("Size is too large!");
    };
}