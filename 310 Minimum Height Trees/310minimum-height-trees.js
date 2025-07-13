/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

 // max number of such nodes can only be two and they will always be the middle nodes.
 // look at the tree for whys
 // elminate all the none middle nodes work
 // another approach is to find the longest path and find the middle nodes
var findMinHeightTrees = function(n, edges) {
    if(n === 1){
        return [0];
    }

    const map = new Map();

    for(const [from, to] of edges){
        const cur = map.get(from) ?? [];
        const cur2 = map.get(to) ?? [];
        cur.push(to);
        cur2.push(from);

        map.set(from, cur);
        map.set(to, cur2);
    }

    const edgesCnt = new Map();
    const leaves = [];
    // find all the leaf nodes
    for(const [src, nei] of map.entries()){
        if(nei.length === 1){
            leaves.push(src);
        }
        edgesCnt.set(src, nei.length);
    }

    // keep eliminate the leaves nodes like wrapping layers of onions until only two or less are left
    while(leaves.length){
        
        const len = leaves.length;
        if(n <= 2){
            return leaves;
        }
        for(let i = 0; i < len; i++){
            const node = leaves.shift();
            n-=1;
            for(const nei of map.get(node)){
                edgesCnt.set(nei, edgesCnt.get(nei) - 1);
                if(edgesCnt.get(nei) === 1){
                    leaves.push(nei);
                }
            }
        }
    }



};