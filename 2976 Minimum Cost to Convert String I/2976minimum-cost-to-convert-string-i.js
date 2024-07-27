/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const adj = new Map();

    for(let i = 0; i < original.length; i++){
        const src = original[i];
        const dst = changed[i];
        const curCost = cost[i];
        const cur = adj.get(src) ?? [];
        cur.push([dst, curCost]);
        adj.set(src, cur);
    }



    const dij = (src) =>{
        const minHeap = new MinPriorityQueue({ priority: (e) => e[0] });
        minHeap.enqueue([0, src]); // distance to node itself is 0
        const minCostMap = new Map();
        while(minHeap.size()){
            const [cost, node] =  minHeap.dequeue().element;
            if(minCostMap.has(node)){
                continue;
            }
            minCostMap.set(node, cost);
            for(const [nei, neiCost] of (adj.get(node) ?? [])){
                minHeap.enqueue([cost + neiCost, nei]);
            }
        }
        return minCostMap;
    }

    const sourceChars = source.split("");
    const sourceSet = new Set(sourceChars);
    const minCostMap = new Map();
    for(const c of sourceSet.values()){
        minCostMap.set(c, dij(c));
    };

    let res = 0;
    for(let i = 0; i < source.length; i++){
        const src = source[i];
        const dst = target[i];
        if(!minCostMap.get(src).has(dst)){
            return -1;
        }
        res += minCostMap.get(src).get(dst);
    }

  

    return res;
};