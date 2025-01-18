/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
    
    const dir = [[1, 0] , [-1, 0] , [0, 1] , [0, -1]]

    const pq = new PriorityQueue({
        compare: (a, b) => a[0] - b[0]
    });

    pq.enqueue([0, 0, 0]);

    const visited = new Set();
    const minCosts = Array(grid.length)
                            .fill()
                            .map(() => Array(grid[0].length).fill(Infinity));

    minCosts[0][0] = 0;

    while(!pq.isEmpty()){

        const [cost, i, j] = pq.dequeue();
        const key = `${i},${j}`; 
        visited.add(key);

        if(i === grid.length - 1 && j === grid[0].length - 1){
            return cost
        }

        for(const [x, y] of dir){
            const newI = x + i;
            const newJ = y + j;
            const curCost = grid[newI]?.[newJ];
            const newKey = `${newI},${newJ}`;
            
            if(curCost === undefined || visited.has(newKey)){
                continue;
            }

            if(cost + curCost < minCosts[newI][newJ]){
                minCosts[newI][newJ] = cost + curCost;
                pq.enqueue([cost + curCost, newI, newJ]);
            }
        }
    }

     return minCosts.pop().pop();
};