const frame = document.querySelector('.frame');
const container = document.querySelector('.container');
const buttons = document.querySelector('button');
const containerSize = 700;
const square = document.getElementsByClassName("square");
// const divSquare = document.createElement('div');

// divSquare.classList.add('square');

/* function defaultGrid() {
    const defaultSquareSize = 16;
    
    let gridSize = 10;
    for(i = 0; i <= 16; i++) { 
        const divSquare = document.createElement('div');

        divSquare.style.cssText = `
        border: 0.5px solid grey;
        width: ${gridSize}px;
        height: ${gridSize}px;
        display: inline-block;
        margin-left: -1px;
        margin-bottom:-px
        `
        container.insertBefore(divSquare, buttons);
    }  
}


fillGrid(16); */






/* const frame = document.querySelector('.frame');
const container = document.querySelector('.container');
const buttons = document.querySelector('button');
const containerSize = 700;
const fragment = document.createDocumentFragment();
// const divSquare = document.createElement('div');

// divSquare.classList.add('square');

/* function defaultGrid() {
    const defaultSquareSize = 16;
    
    let gridSize = 10;
    for(i = 0; i <= 16; i++) { 
        const divSquare = document.createElement('div');

        divSquare.style.cssText = `
        border: 0.5px solid grey;
        width: ${gridSize}px;
        height: ${gridSize}px;
        display: inline-block;
        margin-left: -1px;
        margin-bottom:-px
        `
        frame.insertBefore(divSquare, buttons);
    }  
}



const random256 = () => {
    return Math.floor(Math.random() * 256);
}


fillGrid(16); */

const fillGrid = (size) => {
    for (let i=0; i<size*size; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('griditem');
        gridItem.addEventListener('mouseenter', ()=> {
            let grayScale = random256();
            gridItem.style.backgroundColor = `rgb(${grayScale}, ${grayScale}, ${grayScale})`;
        });
        fragment.appendChild(gridItem);
    }
    container.appendChild(fragment);
}

fillGrid(16);