/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
 // couldnt solve because the original bfs get time limited which is dumb
 // used the exact same alogrithm so not sure my solution got time limited

 
// var shortestPath = function(grid, k) {
//     const visited = new Set();
//     const que = [[0, 0, k, 0]];
//     const M = grid.length;
//     const N = grid[0].length;

//     // enough k for shorted path(right all the way then down)
//     if(k >= (M - 1) + (N - 1)){
//         return M + N - 2;
//     }

//     while(que.length){
//         const [x, y, r, turn] = que.shift();
//         if(x === M -1 && y === N - 1){
//             return turn;
//         }
//         visited.add(`${x},${y},${r}`);
//         const dirs = [[0,1], [-1,0], [1,0], [0,-1]];

//         for(const dir of dirs){
//             const newX = x + dir[0];
//             const newY = y + dir[1];
//             if(grid[newX]?.[newY] === undefined){
//                 continue;
//             }
//             let newR = r;
//             if(r === 0 && grid[newX][newY] === 1){
//                 continue;
//             }
//             if(!visited.has(`${newX},${newY},${turn + 1}`)){
//                 if(grid[newX][newY] === 1){
//                     newR -= 1;
//                 }

//                 que.push([newX, newY, newR, turn + 1]);
//             }
//         }
//     }

//     return -1;
// };


var shortestPath = function(grid, k) {
    /**
        Concept:
        -- Since we are given a grid of cells and we have to find the shortest path between two cells,
           we can solve this problem using BFS.
        -- The grid may contain many obstacles and there are K obstacles that can be eliminated.
        -- Once we have eliminated K obstacles, there's no path and an alternate path must be considered
        -- Therefore, we must know at each cell we are visiting what value of K we brought to that cell
        -- Also, to avoid getting stuck in a loop of wrong path, we must avoid paths already visited
        
        Approach:
        -- Push a tuple [ row, col, remainingK ] into a queue. Also put combination as seen in a set.
        -- For each tuple that we remove from the queue:
           -- Check if row and col are lower right coordinates. If true, return moves taken so far.
           -- If not true,
              -- Move in each of the four directions from that cell to find its neighbor
              -- Validate the neighbor:
                 -- Check for out of bounds
                 -- Check if neighbor cell has an obstacle and if K is exhausted
              -- If validated, do the following if neighbor is not seen before:
                 -- If not obstacle, add neighbor coordinates and remaining K to queue and set.
                 -- If obstacle, decrement remaining k and add values to queue and set.
    */
    
    // Time Complexity: O(m*n) --> Worst case traversing all cells
    // Space Complexity: O(m*n) --> Worst case storing all cells
    
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length, cols = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visited = new Set();
    visited.add(`0-0-${k}`);
    
    let moves = 0, queue = [[0, 0, k]];// Starting coordinates and k
    
    while (queue.length > 0) {
        let nextMoves = [];
        
        while (queue.length > 0) {
            let [x, y, remainingK] = queue.pop();
            
            if (x === rows - 1 && y === cols - 1) return moves;// Reached destination => return moves
            
            for (const direction of directions) {
                let row = x + direction[0], col = y + direction[1];
                
                // Check for out of bounds or too many obstacles to eliminate
                if (row < 0 || col < 0 || row >= rows || col >= cols ||
                   (grid[row][col] === 1 && remainingK === 0)) continue;
                
                // Consider a decremented k while discovering next 4 neighbors if obstacle
                let newK = grid[row][col] === 1 ? remainingK - 1 : remainingK;
                let key = `${row}-${col}-${newK}`;
                
                if (!visited.has(key)) {
                    visited.add(key);
                    nextMoves.push([row, col, newK]);
                }
            }
        }
        
        queue = nextMoves;
        moves++;
    }
    
    return -1;// return -1 if no path found
};