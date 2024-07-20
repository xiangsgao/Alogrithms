/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const matrix = Array(rowSum.length).fill().map(() => Array(colSum.length).fill(0));
    const ROW = matrix.length;
    const COL = matrix[0].length;
    // populate the first col 
    for(let i = 0; i < ROW; i++){
        matrix[i][0] = rowSum[i];
    }  
 
    // begin offsetting 
    for(let i = 0; i < COL - 1; i++){
        const total = matrix.reduce((acc, e) => acc + e[i], 0);
        let offset = Math.max(0, total - colSum[i]);
        let row = 0;
        while(offset != 0){
            const minus = Math.min(offset, matrix[row][i]);
            matrix[row][i] -= minus;
            matrix[row][i + 1] += minus;
            offset -= minus;
            row++;
        }
    }

    return matrix;
    
};