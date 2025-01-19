/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const pq = new PriorityQueue({
        compare: ([a], [b]) => a - b 
    });

    // add all the edges to the priority queue
    const M = heightMap.length;
    const N = heightMap[0].length;
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(i === 0 || j === 0 || i === M - 1 || j === N - 1){
                pq.enqueue([heightMap[i][j], i, j]);
                heightMap[i][j] = -1; // mark it visited
            }

        }
    }

    // pop the smallest, keep track of the max height
    // basically bfs in an increasing order
    let res = 0;
    let maxH = -1;

    while(!pq.isEmpty()){
        const [h, r, c] = pq.dequeue();
        maxH = Math.max(maxH, h);
        res += maxH - h; // max height minus cur height is the volmue that holds water

        // push neighbors to the queue

        const neighbors = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c -1]];

        for(const [newR, newC] of neighbors){
            const outOfBound = heightMap[newR]?.[newC] === undefined;

            if(outOfBound || heightMap[newR][newC] === -1) // if visited or out of bound
            {
                continue;
            }

            pq.enqueue([heightMap[newR][newC], newR, newC]);
            heightMap[newR][newC] = -1;
        }
    }

    return res;
};