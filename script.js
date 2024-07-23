function getSize() {
    let gridSize = prompt("Please enter grid size under 100: ");
    if (gridSize < 100) {
        return gridSize;
    } else {
        alert("Size is too large!");
    };
};

function createGrid(gridSize){
    let gridArray = [];
    for (i = 0; i<gridSize; i++) {
        gridArray.push(document.createElement("div"));
    };
    gridArray.classList.add("pixel");
    let containerDiv = document.getElementsByClassName(".container");
    containerDiv.appendChild(gridArray);
};

function playGame(){
    let gridSize = getSize();
    createGrid(gridSize);
}

playGame();