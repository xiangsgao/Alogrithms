/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    const commandsCord = {
        "UP": [-1, 0],
        "RIGHT" : [0, 1],
        "DOWN" : [1, 0],
        "LEFT" : [0, -1]
    }
    const matrix = Array(n).fill().map((_, row) => Array(n).fill().map((_, col) =>{
        const val = row * n + col;
        return val;
    }));
    let [i , j] = [0, 0];
    for(const command of commands){
        const [commandI, commandJ] = commandsCord[command];
        i+= commandI;
        j+= commandJ;
    }

    return matrix[i][j];
};