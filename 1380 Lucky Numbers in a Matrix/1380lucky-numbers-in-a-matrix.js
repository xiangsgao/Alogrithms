/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const ROW = matrix.length;
    const COL = matrix[0].length;
    const map = new Map();
    // find the min in the row 
    for(let i = 0; i < ROW; i++){
        let max = Infinity;
        for(let j = 0; j < COL; j++){
            const n = matrix[i][j];
            if(max > n){
                max = n;    
                map.set(i, j)
            }
        }   
    }

    // find the max in the col
    const result = [...map.entries()].filter(([i, j]) => {
        const row = matrix[i];
        const el = matrix[i][j];
        let hasBigger = false;
        for(let k = i; k < ROW; k++){
            if(matrix[k][j] > el){
                hasBigger = true;
            }
        }
        for(let k = i; k >= 0; k--){
            if(matrix[k][j] > el){
                hasBigger = true;
            }
        }
        return !hasBigger;
    });
    return result.map(([i, j]) => matrix[i][j])
    
};