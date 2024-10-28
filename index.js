document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const gameGrid = createTable(7, 7)
    board.appendChild(gameGrid);
});

function createTable(numRows, numCols) {
    const table = document.createElement("table");

    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");
        table.appendChild(row);

        for (let j = 0; j < numCols; j++) {
            const col = document.createElement("td");
            row.appendChild(col);
        }
    }

    return table;
}