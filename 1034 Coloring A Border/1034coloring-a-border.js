// cant solve because i have no idea what this question is asking

var colorBorder = function(grid, row, col, color) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Set();
    const isBorder = (row, col, color) => {
        const value = grid[row]?.[col];
        return value === 'x' || value === color;
    };
    const coloring = (row, col, color) => {
        if (row < 0 || col < 0 || row >= m || col >= n) return;
        if (visited.has(`${row}_${col}`)) return;
        const value = grid[row][col];
        if (value !== color) return;

        grid[row][col] = 'x';
        coloring(row - 1, col, color);
        coloring(row + 1, col, color);
        coloring(row, col - 1, color);
        coloring(row, col + 1, color);
        const checkTop = isBorder(row - 1, col, color);
        const checkBottom = isBorder(row + 1, col, color);
        const checkLeft = isBorder(row, col - 1, color);
        const checkRight = isBorder(row, col + 1, color);
        if (checkTop && checkBottom && checkLeft && checkRight) {
          grid[row][col] = color;
          visited.add(`${row}_${col}`);
        }
    };

    coloring(row, col, grid[row][col]);
    return grid.map(col => col.map(value => value === 'x' ? color : value ));
}