/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
    const adj = new Map();

    for(const [n1, n2] of edges){
        const cur = adj.get(n1) ?? [];
        const cur2 = adj.get(n2) ?? [];
        cur.push(n2);
        cur2.push(n1);
        adj.set(n1, cur);
        adj.set(n2, cur2);
    }

    const visited = new Set();
    
    const getConnected = (src) =>{
        
        const q = [src]; 
        const retval = new Set();
        retval.add(src);
        while(q.length){
            const node = q.shift();
            visited.add(node);
            for(const n of (adj.get(node) ?? [])){
                if(retval.has(n)){
                    continue;
                }
                q.push(n);
                retval.add(n); 
            }
        }
        return retval;
    }

    // gets the longest groups
    const longestPath = (src) =>{
        const q = [[src, 1]]; 
        const dist = new Map();
        dist.set(src, 1);
        while(q.length){
            const [node, len] = q.shift();
            for(const n of (adj.get(node) ?? [])){
                if(dist.has(n)){
                    // this means odd cycle
                    if(dist.get(n) == len){
                        return -1;
                    }
                    continue;
                }
                q.push([n, len + 1]);
                dist.set(n, len + 1);
            }
        }
        
       return Math.max(...[...dist.values()])
    }

    let res = 0;
    for(let i = 1; i < n + 1; i++){
        if(visited.has(i)){
            continue;
        }
        visited.add(i);
        const connected = getConnected(i); 

        let max = 0;
        for(const src of connected.values()){
            const len = longestPath(src);
            if(len === -1){
                return -1; // odd cycle cannot be divided
            }
            max = Math.max(len, max)
        }
        res += max;
    }

    return res;
};