const containerDiv = document.querySelector(".container");
let gridDiv;

for (let i = 0; i <= 272; i++) {
    addDiv();
    containerDiv.appendChild(gridDiv);
    gridDiv.addEventListener("mouseover", func, false);
}

function func() {
    this.setAttribute("style", "background-color: blue;")
}
function addDiv() {
    gridDiv = document.createElement('div');
}



