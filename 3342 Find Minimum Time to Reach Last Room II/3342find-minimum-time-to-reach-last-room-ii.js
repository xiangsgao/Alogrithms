/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    const N = moveTime.length;
    const M = moveTime[0].length;

    const queue = new PriorityQueue({
        compare: ([d1], [d2]) => d1 - d2 
    });

    const best = Array(N).fill().map(() => Array(M).fill(Infinity));
    best[0][0] = 0;
    queue.enqueue([0, 0, 0, true]);

    const directions = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1]
    ]

    while(!queue.isEmpty()){
        const [d, x, y, one] = queue.dequeue();

        if(best[x][y] < d){
            continue;
        }

        if(x === N - 1 && y === M - 1){
            break;
        }

        for(const [x1, y1] of directions){
            const newX = x + x1;
            const newY = y + y1;

            const withinBound = best[newX]?.[newY] !== undefined;
            if(withinBound && best[newX][newY] > Math.max(d, moveTime[newX][newY]) + 1){
                best[newX][newY] = Math.max(d, moveTime[newX][newY]) + (one ? 1 : 2);
                queue.enqueue([best[newX][newY], newX, newY, !one]);
            }
        }

    }


    return best[N - 1][M - 1];
};