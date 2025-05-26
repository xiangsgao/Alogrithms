/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
 // my topological sort failed an edge case, not sure why
 // idea is that maxium colors are only 26. we can use a single count array for all the node and then 26 nested array for each color. at each node, update each color count as max of itself and neighbor as dfs tranverse and return whicever color is the most frequent at the current node.
 
var largestPathValue = function(colorsArr, edges) {
    const map = new Map();
    for(const [from, to] of edges){
        const cur = map.get(from) ?? [];
        cur.push(to);
        map.set(from, cur);
    }

    const path = new Set();
    const visited = new Set();
    const count = Array(colorsArr.length).fill().map(() => Array(26).fill(0));


    const dfs = (node) =>{

        if(path.has(node)){
            return Infinity;
        }

        if(visited.has(node)){
            return 0;
        }

        visited.add(node); 
        path.add(node);
        const colorIdx = colorsArr[node].charCodeAt(0) - "a".charCodeAt(0);
        count[node][colorIdx] = 1;
        for(const nei of (map.get(node) ?? [])){
            if(dfs(nei) === Infinity){
                return Infinity;
            }
            for(let c = 0; c < 26; c++){
                count[node][c] = Math.max(count[node][c], (c === colorIdx ? 1 : 0) + count[nei][c]);
            }
        }

        path.delete(node);
        return Math.max(...count[node]);
    }

    let res = 0;

    for(let key = 0; key < colorsArr.length; key++){
       res = Math.max(res, dfs(key));
    }

    return res === Infinity ? - 1 : res;

};