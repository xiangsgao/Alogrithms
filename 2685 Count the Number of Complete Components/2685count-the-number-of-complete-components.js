/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 // failed to solve because not realize for a close loop compoenents where every edge is reachable to every other edges, number of edges of all the nodes have to be excatly number of nodes in the component - 1. brush up on graph theory
var countCompleteComponents = function(n, edges) {
   


    const adj = new Map();
    for(const [from, to] of edges){
        const cur = adj.get(from) ?? [];
        const cur2 = adj.get(to) ?? [];

        cur.push(to);
        cur2.push(from);

        adj.set(from, cur);
        adj.set(to, cur2);
    }

    const visited = new Set();
    const dfs = (node, res) =>{
       if(visited.has(node)){
            return;
       }

       visited.add(node);
       res.push(node);
       for(const n of (adj.get(node) ?? [])){
            dfs(n, res);
       }

       return res;
    }

    let res = 0;
    for(let i = 0; i < n; i++){
        if(visited.has(i)){
            continue;
        }

        const comp = dfs(i, []);
        const valid = !comp.some(e => (adj.get(e) ?? []).length !== comp.length - 1);
        if(valid){
            res += 1;
        }
    }

    return res;
};