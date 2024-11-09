/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const que = new PriorityQueue({
        compare: ([a], [b]) => a - b
    });

    const neighbors = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    const min = Array(grid.length).fill().map(() => Array(grid[0].length).fill(Infinity));
    min[0][0] = grid[0][0];
    que.enqueue([grid[0][0], 0, 0]);
    const visited = new Set();
    while(!que.isEmpty()){
        const [cost, x, y] = que.dequeue();
        const key = `${x},${y}`;
        if(visited.has(key)){
            continue;
        }

        visited.add(key);

        for(const [dx, dy] of neighbors){
            const x1 = x + dx;
            const y1 = y + dy;
            const cur = grid[x1]?.[y1];
            if(cur === undefined){
                continue;
            }
            const max = Math.max(cost, cur);
            if(min[x1][y1] > max){
                min[x1][y1] = max;
            }

            que.enqueue([max, x1, y1]);
        }
    }

    return min[min.length - 1][min[0].length -1];

};