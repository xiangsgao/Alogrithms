/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const rows = new Map();
    const cols = new Map();

    const N = grid[0].length;
    const M = grid.length;

    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(grid[i][j]){
                rows.set(i, (rows.get(i) ?? 0) + 1);
                cols.set(j, (cols.get(j) ?? 0) + 1);
            }
        }
    }

    let res = 0;
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(grid[i][j] && (rows.get(i) > 1 || cols.get(j) > 1)){
                res += 1;
            }
        }
    }


    return res;


};