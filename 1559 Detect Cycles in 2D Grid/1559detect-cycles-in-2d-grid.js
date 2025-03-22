/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    
    const M = grid.length;
    const N = grid[0].length;

    const cache = new Map();
    const visited = new Set();


    const dfs = (i, j, parent, letter) =>{

        const key = `${i},${j}`;
        const isOutOfBound = grid[i]?.[j] === undefined;

       

        if(isOutOfBound){
            return false;
        }

        const cur = grid[i][j];

        if(cur !== letter){
            return false;
        }

        if(cache.has(key)){
            return cache.get(key);
        }

        if(visited.has(key)){
            cache.set(key, true);
            return cache.get(key);
        }

        visited.add(key);
        const children = [[i + 1, j],[i - 1, j],[i, j + 1],[i, j- 1]];

        for(const [x, y] of children){
            const childKey = `${x},${y}`;
            if(parent !== childKey && dfs(x, y, key, letter)){
                cache.set(key, true);
                return cache.get(key);
            }
        }

        cache.set(key, false);
        visited.delete(key);
        return cache.get(key);
    }

    
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(dfs(i, j, "", grid[i][j])){
                return true;
            }
        }
    }

    return false;
};