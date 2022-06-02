//initial variables
let gridSize = parseInt(prompt('Select the number of squares for length/height'));
const squareSize = '25px';


//creating grid of divs
function createGrid(size) {
    const container = document.querySelector('#container');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = (i*size) + j;
            cell.style.border = 'solid';
            cell.style.width = squareSize;
            cell.style.height = squareSize;
            cell.style.margin = '1px';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
createGrid(gridSize);


//adding event listener
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover',hover);
})

//hover function
function hover() {
    this.style.backgroundColor = 'black';
}