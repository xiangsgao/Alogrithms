/**
 * @param {number[][]} grid
 * @return {number}
 */

 // basically a greedy BFS
 // idea is that you always prioritize the neighbor with the greatest value because we want the MAXIMUM min value remember? really need to read the question carefully.
var maximumMinimumPath = function(grid) {
    
    const M = grid.length;
    const N = grid[0].length;

    // max heap
    const heap = new PriorityQueue(([a], [b]) =>{
        return b - a;
    });

    const visited = new Set();
    visited.add("0,0");
    heap.enqueue([grid[0][0], 0, 0]) // val, row, col
    const nei = [[0, -1], [0, 1], [1, 0], [-1, 0]]
    while(heap.size()){
        const [val, row, col] = heap.dequeue();

        if(row === M - 1 && col === N - 1){
            return val;
        }

        for(const [nR, nC] of nei){
            const cR = nR + row;
            const cC = nC + col;
            const key = `${cR},${cC}`;
            if(grid[cR]?.[cC] !== undefined && !visited.has(key)){
                visited.add(key);
                heap.enqueue(
                   [
                    Math.min(val, grid[cR][cC]),
                    cR,
                    cC
                   ]
                );
            }
        }
    }
    return -1;
};