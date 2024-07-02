/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const matrix = Array(n).fill().map(() => Array(n).fill(0));
    const ROWS = n;
    const COLS = n;
    
    const add = (topLeftr,topLeftc, bottomRightr, bottomRightc) =>{
        for(let r = topLeftr; r <= bottomRightr; r++){
            for(let c = topLeftc; c <= bottomRightc; c++){
                matrix[r][c] +=1;
            }
        }
    }
    
    while(queries.length){
        const [topLeftx, topLeftY, bottomRightx, bottomRighty] = queries.pop();
        add(topLeftx, topLeftY, bottomRightx, bottomRighty);
    }
    
    return matrix;
};