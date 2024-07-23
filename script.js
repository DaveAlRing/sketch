function getSize() {
    let gridSize = prompt("Please enter grid size under 100: ");
    if (gridSize < 100) {
        return gridSize;
    } else {
        alert("Size is too large!");
    };
};

function createGrid(gridSize){
    gridSize = gridSize * gridSize;
    for (i = 0; i<gridSize; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";

        document.getElementById("container").appendChild(pixel);
    };    
};

function playGame(){
    let gridSize = getSize();
    createGrid(gridSize);
    draw();
}

function draw(){
    let gamePixel = document.querySelectorAll(".pixel");

    gamePixel.forEach(function(pixel) {
        pixel.addEventListener("mouseover", ()=>{
            pixel.style.backgroundColor = "teal";
        })
    })

  
}

playGame();