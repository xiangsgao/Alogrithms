/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */

 // just breadth first search on all the queries after sorted them from least to greatest
 // use min heap to pick the neighbor to visit
var maxPoints = function(grid, queries) {
    const M = grid.length;
    const N = grid[0].length;

    const sorted = [];
    for(let i = 0; i < queries.length; i++){
        const cur = queries[i];
        sorted.push([cur, i]);
    }

    
  
    sorted.sort(([a], [b]) => a - b); // val, r, c
    const visited = new Set();
    visited.add(`0,0`);
    const res = Array(queries.length).fill(0);
    const minHeap = new PriorityQueue(([a], [b]) => a - b);
    minHeap.enqueue([grid[0][0], 0, 0]);
    let points = 0;

    for(const [limit, index] of sorted){

        while(!minHeap.isEmpty() && minHeap.front()[0] < limit){
            const [val, r, c] = minHeap.dequeue();
            points += 1;

            const neighbors = [[r + 1, c] , [r - 1, c], [r, c + 1], [r, c - 1]];
            for(const [nr, nc] of neighbors){
                const key = `${nr},${nc}`;
                if(!visited.has(key) && grid[nr]?.[nc] !== undefined){
                       minHeap.push([grid[nr][nc], nr, nc]);
                       visited.add(key);
                }
             
            }
        }
        res[index] = points;
    }

    return res;
};