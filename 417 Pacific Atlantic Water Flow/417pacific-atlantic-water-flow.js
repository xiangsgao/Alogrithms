/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 // solved by regurgitating neetcode 150 solutions
var pacificAtlantic = function(heights) {
    const M = heights.length;
    const N = heights[0].length;
    const pacific = Array(M).fill().map(() => Array(N).fill(false));
    const alantic = Array(M).fill().map(() => Array(N).fill(false));
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const visited = new Set();
    const getKey = (i, j) =>{
        return `${i},${j}`;
    }
    const bfs = (a, b, grid)=> {
        if(visited.has(getKey(a, b))){
            return;
        }
        
        const que = [[a, b]];
        visited.add(getKey(a, b));
        
        while(que.length){
            const [i, j] = que.shift();
            grid[i][j] = true;
            const cur = heights[i][j];

            for(const [x, y] of  dirs){
                const newI = i + x;
                const newJ = j + y;
                const level = heights[newI]?.[newJ] ?? -Infinity;
                const key = getKey(newI,newJ);
                if(level >= cur && !visited.has(key)){
                    que.push([newI, newJ]);
                    visited.add(key);
                }
            }
        }
    }

    // pacific
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N ; j++){
            if(i === 0 || j === 0){
                bfs(i, j, pacific);
            }
        }
    }

    visited.clear();

    // alantic
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N ; j++){
            if(i === M - 1 || j === N - 1){
                bfs(i, j,alantic);
            }
        }
    }


    const res = [];
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(alantic[i][j] && pacific[i][j]){
                res.push([i, j]);
            }
        }
    }

    return res;

};