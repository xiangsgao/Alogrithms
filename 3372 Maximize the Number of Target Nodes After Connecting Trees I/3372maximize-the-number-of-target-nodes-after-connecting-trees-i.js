/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
 // reading the question is a bit tricky
 // the idea is to figoure out what the max node is for graph 2 
 // then for every node at graph 1, figoure out what the max node it can reach from that node and connect it to graph 2 to get the most nodes.
var maxTargetNodes = function(edges1, edges2, k) {
    
    const map1 = new Map();
    for(const [from, to] of edges1){
        const cur = map1.get(from) ?? [];
        const cur2 = map1.get(to) ?? [];
        cur.push(to);
        cur2.push(from);
        map1.set(from, cur);
        map1.set(to, cur2);
    }
    const map2 = new Map();
    for(const [from, to] of edges2){
        const cur = map2.get(from) ?? [];
        const cur2 = map2.get(to) ?? [];
        cur.push(to);
        cur2.push(from);
        map2.set(from, cur);
        map2.set(to, cur2);
    }

    const n = edges1.length;
    const m = edges2.length;
    // how many nodes can be reached by the start given the limit
    const bfs = (start, adj, limit)=>{
        const q = [ [start, 0, -1] ]; // node, level, parent
        let count = 0;
        while(q.length){
            const [node, level, parent] = q.shift();
            count += 1;
            for(const nei of (adj.get(node) ?? [])){
                if(level < limit && nei !== parent){
                    q.push([nei, level + 1, node]);
                }
            }
        }
        return count;
    }

    // find the max that 2nd graph can reach
    let max2 = 0;
    if(k > 0){
        for(let i = 0; i < m + 1; i++){
            max2 = Math.max(max2, bfs(i, map2, k - 1)); // k - 1 is very important because we are connecting two graphs so need top minus one connect
        }
    }

    const res = [];

    for(let i = 0; i < n + 1; i++){
        res.push(bfs(i, map1, k) + max2);
    }
    
    return res;
};