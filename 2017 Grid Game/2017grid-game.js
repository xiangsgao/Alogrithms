/**
 * @param {number[][]} grid
 * @return {number}
 */

 // failed to realized the upper right and the bottom left none reds are the max values for the 2nd robots. minimize this value
var gridGame = function(grid) {
    const N = grid[0].length;
    const top = [];
    const bottom = [];
    for(let i = 0; i < N; i++){
        
        const prev = top[i - 1] ?? 0;
        const cur = grid[0][i];
        top[i] = prev + cur;

        const prevB = bottom[i - 1] ?? 0;
        const curB = grid[1][i];
        bottom[i] = prevB + curB;
    }

    let min = Infinity;
    for(let i = 0; i < N; i++){
        const topRight = top[N - 1] - top[i];
        const bottomLeft = bottom[i - 1] ?? 0;
        const maxOfTwo = Math.max(topRight, bottomLeft);
        min = Math.min(maxOfTwo, min);
    }

    return min;
};