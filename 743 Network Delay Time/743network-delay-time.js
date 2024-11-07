/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adj = new Map();

    for(let i = 0; i < times.length; i++){
        const [from, to, cost] = times[i];
        const cur = adj.get(from) ?? [];
        cur.push([cost, to]);
        adj.set(from, cur);
    }

    const que = new PriorityQueue({
        compare: ([a], [b]) => a - b 
    });

    que.enqueue([0, k]);

    const visited = new Set();
    let cost = 0;
    const minCosts = Array(n).fill(Infinity);
    minCosts[k - 1] = 0;
      
    while(que.size()){
        const [c, node] =  que.dequeue();
       

        if(visited.has(node)){
            continue;
        }

        visited.add(node);

        for(const [cCost, cNode] of adj.get(node) ?? []){
            const finalCosts = c + cCost;
            if(minCosts[cNode - 1] > finalCosts){
                minCosts[cNode - 1] = finalCosts;
            }
            que.enqueue([finalCosts, cNode]);
        }
    }
    if(visited.size !== n){
        return -1;
    }
    
    return Math.max(...minCosts);

};