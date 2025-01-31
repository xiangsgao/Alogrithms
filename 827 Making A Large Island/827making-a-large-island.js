/**
 * @param {number[][]} grid
 * @return {number}
 */

var largestIsland = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    const map = new Map();

    const dfs = (i, j, coordinates) =>{
        const key = `${i},${j}`;
        const cur = grid[i]?.[j];
        if(cur === undefined || cur < 1){
            return;
        }
        coordinates.push(key);
        grid[i][j] = -1;
        dfs(i - 1, j, coordinates)
        dfs(i + 1, j, coordinates)
        dfs(i, j - 1, coordinates)
        dfs(i, j + 1, coordinates)
    }

    let group = 0;
    let max = 0;
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(grid[i][j] < 1){
                continue;
            }
            const coords = [];
            dfs(i, j, coords);
            const size = coords.length;
            for(const e of coords){
                map.set(e, {group, size});
            }
            max = Math.max(max, size);
            group++;
        }
    }

    const combine = (i, j) =>{
        let res = 1;
        const groupsAdded = new Set();
        if(map.has(`${i + 1},${j}`) && !groupsAdded.has(map.get(`${i + 1},${j}`).group)){
            const {size, group} = map.get(`${i + 1},${j}`);
            groupsAdded.add(group);
            res += size;
        }
        if(map.has(`${i - 1},${j}`) && !groupsAdded.has(map.get(`${i - 1},${j}`).group)){
            const {size, group} = map.get(`${i - 1},${j}`);
            groupsAdded.add(group);
            res += size;
        }
        if(map.has(`${i},${j + 1}`) && !groupsAdded.has(map.get(`${i},${j + 1}`).group)){
            const {size, group} = map.get(`${i},${j + 1}`);
            groupsAdded.add(group);
            res += size;
        }
        if(map.has(`${i},${j - 1}`) && !groupsAdded.has(map.get(`${i},${j - 1}`).group)){
            const {size, group} = map.get(`${i},${j - 1}`);
            groupsAdded.add(group);
            res += size;
        }

        return res;
    }

   
     for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(grid[i][j] !== 0){
                continue;
            }
            max = Math.max(max, combine(i, j));
        }
    } 
    return max;
};

 
// 1 1 1  
// 1 1 1
// 1 0 1
//  { (1,0): {group: 1, size: 1}, (1, 1): {2, 1} }   