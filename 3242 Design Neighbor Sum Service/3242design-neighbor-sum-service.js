/**
 * @param {number[][]} grid
 */
var neighborSum = function(grid) {
    this.grid = grid;
    this.map = new Map();
    const ROWS = grid.length;
    const COLS = grid[0].length;
    for(let i = 0; i < ROWS; i++){
        for(let j = 0; j < COLS; j++){
            const cur = grid[i][j];
            const val = {element: cur, cords: [i, j]};
            this.map.set(cur, val);
        }
    }
};

/** 
 * @param {number} value
 * @return {number}
 */
neighborSum.prototype.adjacentSum = function(value) {

    // get the cords 
    const {cords} = this.map.get(value);
    const [i, j] = cords;
    // find all the adjacent 
    const retval = (this.grid[i + 1]?.[j] ?? 0) + 
                    (this.grid[i - 1]?.[j] ?? 0) +
                    (this.grid[i][j + 1] ?? 0) +
                    (this.grid[i][j - 1] ?? 0);

    return retval;
};

/** 
 * @param {number} value
 * @return {number}
 */
neighborSum.prototype.diagonalSum = function(value) {
    const {cords} = this.map.get(value);
    const [i, j] = cords;

    const retval = (this.grid[i + 1]?.[j - 1] ?? 0) +
                    (this.grid[i + 1]?.[j + 1] ?? 0) +
                    (this.grid[i - 1]?.[j - 1] ?? 0) +
                    (this.grid[i - 1]?.[j + 1] ?? 0);

    return retval;
};

/** 
 * Your neighborSum object will be instantiated and called as such:
 * var obj = new neighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */