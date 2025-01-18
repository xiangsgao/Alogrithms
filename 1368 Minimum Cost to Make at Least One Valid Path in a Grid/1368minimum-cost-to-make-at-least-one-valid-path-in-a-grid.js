/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    
    const que = [[0, 0, 0]];
    const que2 = [];

    const minCosts = Array(grid.length).fill().map(() => Array(grid[0].length).fill(Infinity));

    minCosts[0][0] = 0;

    const getZeroCord = (i, j, dir) =>{
         switch(dir){
            case 1: return [i, j + 1];
            case 2: return [i, j - 1];
            case 3: return [i + 1, j];
            case 4: return [i - 1, j];
        }
    }

    const visited = new Set();

    while(que.length || que2.length){
        
         const [cost, i, j] = que.shift() ?? que2.shift();
         
         const key = `${i},${j}`;   
         visited.add(key);
         const neighbors = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]];

         const [zeroI, zeroJ] = getZeroCord(i, j, grid[i][j]);

         for(const [newI, newJ] of neighbors){
           
            const outOfBound = grid[newI]?.[newJ] === undefined;
            const newKey = `${newI},${newJ}`;
            if(outOfBound || visited.has(newKey)){
                continue;
            }

            if(newI === zeroI && newJ === zeroJ && cost < minCosts[newI][newJ]){
                minCosts[newI][newJ] = cost;
                que.push([cost, newI, newJ]);
            } else if(cost + 1 < minCosts[newI][newJ]){
                minCosts[newI][newJ] = cost + 1;
                que2.push([cost + 1, newI, newJ]);
            }

         }

    }

    return minCosts.pop().pop()
};