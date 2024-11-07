/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const visited = new Set();
    const adj = new Map();
    const que = new PriorityQueue({
        compare: ([_, a], [__, b]) => a - b
    });


    for(let i = 0; i < points.length; i++){
        const [x, y] = points[i];
        for(let j = i + 1; j < points.length; j++){
            const curI = adj.get(i) ?? [];
            const curJ = adj.get(j) ?? [];
            const [x1, y1] = points[j];
            const cost = Math.abs(x - x1) + Math.abs(y - y1);
            curI.push([j, cost]);
            curJ.push([i, cost]);
            adj.set(i, curI);
            adj.set(j, curJ);
        }
    }


    que.enqueue([0, 0]);
    let cost = 0;
    while(visited.size < points.length){
        const [i, c] = que.dequeue();

        if(visited.has(i)){
            continue;
        }
        visited.add(i);
        cost += c;
        for(const [j, cost] of adj.get(i) ?? []){
            if(!visited.has(j)){
                que.enqueue([j, cost]);
            }
        }
    }

    return cost;
};