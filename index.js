document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");

    if (!board) throw new Error(
        "Could not find the board element"
    );

    const numRows = 7;
    const numCols = 7;
    const gameGrid = createTable(numRows, numCols);

    board.appendChild(gameGrid);
});

function createTable(numRows, numCols) {
    const table = document.createElement("table");
    table.className = "game-grid";
    table.setAttribute("role", "grid");

    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");
        row.setAttribute("role", "row");
        table.appendChild(row);

        for (let j = 0; j < numCols; j++) {
            const col = document.createElement("td");
            col.id = `${i}${j}`;
            col.setAttribute("role", "gridcell");
            row.appendChild(col);
        }
    }

    return table;
}