//Global variables//
const container = document.querySelector(".container");
const grey = document.querySelector("#grey");
const colorful = document.querySelector("#colorful");
const erase = document.querySelector("#erase");
const reset = document.querySelector("#reset");
const cells = document.getElementsByClassName("cell");
const root = document.documentElement;

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
            newDiv.style.transition = '0.3s';
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
            newDiv.style.transition = '0.3s';
        });
    });
}
function paintColors() {
    let newDiv = [...document.querySelectorAll('.cell')];
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            element.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
            newDiv.style.transition = '0.3s';
        });
    });
}
function eraseCells() {
    let newDiv = [...document.querySelectorAll('.cell')];
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = 'white';
        })
    })
}
function removeGrid() {
    let newDiv = [...document.querySelectorAll('.cell')];
    newDiv.forEach(element => {
        element.remove();
    });
}
function newGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
function resetAll() {
    removeGrid();
    let size
    do {
        size = prompt('Select a grid size between 2 and 100','');
    } while (size < 2 || size > 100);
    newGrid(size);
    defaultGrid(size);
}

grey.addEventListener('click', () => {
    paintGrey();
})
colorful.addEventListener('click', () => {
    paintColors();
})
erase.addEventListener('click', () => {
    eraseCells();
})
reset.addEventListener('click', () => {
    resetAll();
})

defaultGrid(16);