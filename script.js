const container = document.querySelector(".container");
const resetBtn= document.querySelector("#reset");

function createGrid(num) {

    for (let i = 0; i < num * num; i++) {

        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

        let squareDiv = document.createElement('div');
        container.appendChild(squareDiv);
        
        squareDiv.addEventListener("mouseover", e => {
            squareDiv.style.backgroundColor = "black";
        });

        function resetGrid(){
            resetBtn.addEventListener('click', e => {
                squareDiv.style.backgroundColor = "white";
            });
        }
        resetGrid();
    }
}

createGrid(16);

function resetSize() {
    let number;
    do {
        number = parseInt(prompt("How many squares per side? (MAX 100)"));
    }
    while (number > 100);

    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createGrid(number);
}   

resetBtn.addEventListener('click', () => {
    resetSize();
});