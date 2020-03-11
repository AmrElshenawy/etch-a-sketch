//Global variables//
const container = document.querySelector("#container");
const shadesofgrey = document.querySelector("#shadesofgrey");
const colorful = document.querySelector("#colorful");
const reset = document.querySelector("#reset");
const gridLines = document.documentElement;
const cells = document.getElementsByClassName("cell");

function random256() {
    return Math.floor(Math.random() * 256);
}

function defaultGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        newDiv.addEventListener('mouseenter', () => {
            let greyScale = random256();
            newDiv.style.backgroundColor = `rgb(${greyScale}, ${greyScale}, ${greyScale})`;
        });
        container.appendChild(newDiv);
    }
}
function paintGrey() {
    let newDiv = [...document.querySelectorAll('.cell')];
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', () => {
            let greyScale = random256();
            element.style.backgroundColor = `rgb(${greyScale}, ${greyScale}, ${greyScale})`;
        });
    });
}
function paintColors() {
    let newDiv = [...document.querySelectorAll('.cell')];
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
        });
    });
}
function resetAll() {
    removeGrid();
    let size = prompt('Select a grid size between 2 and 100','');
}

shadesofgrey.addEventListener('click', () => {
    paintGrey();
})

colorful.addEventListener('click', () => {
    paintColors();
})
reset.addEventListener('click', () => {
    resetAll();
})

defaultGrid(16);