function createGrid(size) {
    const container = document.querySelector('#container');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.border = 'solid';
            cell.style.width = '25px';
            cell.style.height = '25px';
            cell.style.margin = '1px';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
createGrid(16);