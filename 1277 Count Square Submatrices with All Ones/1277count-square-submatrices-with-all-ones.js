/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
   const ROWS = matrix.length;
   const COLS = matrix[0].length;
    const cache = new Map();
    const dfs = (r, c) =>{
        const key = `${r},${c}`;

        if(matrix[r]?.[c] === undefined || !matrix[r][c]){
            return 0;
        }

        if(cache.has(key)){
            return cache.get(key);
        }


        const length = 1 + Math.min(
            dfs(r + 1, c),
            dfs(r, c + 1),
            dfs(r + 1, c + 1)
        );
        cache.set(key, length);
        return length;
    }

    let res = 0;
    for(let i = 0; i < ROWS; i++){
        for(let j = 0; j < COLS; j++){
            res += dfs(i, j);
        }
    }
  
  
  return res;
};