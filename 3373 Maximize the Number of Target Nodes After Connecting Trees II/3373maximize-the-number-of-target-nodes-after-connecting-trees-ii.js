/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
 /* similar idea to 
 https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/?envType=daily-question&envId=2025-05-31

just need to switch the limit with parity instead
 */
var maxTargetNodes = function(edges1, edges2) {
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
    // how many nodes can be reached by the start
    const bfs = (start, adj)=>{
        const q = [ [start, 0, -1] ]; // node, parity, parent
        const even = new Set();
        const odd = new Set();
        let count = 0;
        while(q.length){
            const [node, parity, parent] = q.shift();
            if(parity === 0){
               even.add(node);
            }else{
               odd.add(node);
            }
            for(const nei of (adj.get(node) ?? [])){
                if(nei !== parent){
                    newParity = parity === 0 ? 1 : 0;
                    q.push([nei, newParity, node]);
                }
            }
        }
        return [even, odd];
    }

    const [even2, odd2] = bfs(0, map2);
    const [even1, odd1] = bfs(0, map1);

    const max2 = Math.max(even2.size, odd2.size);
    const res = [];

    for(let i = 0; i < n + 1; i++){
        if(even1.has(i)){
            res.push(even1.size + max2);
        }else{
            res.push(odd1.size + max2);
        }
    }

    return res;

};