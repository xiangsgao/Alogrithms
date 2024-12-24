/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {

   
    const buildAdj = (edges)=>{
        const map = new Map();
        for(const [n1, n2] of edges){
            const cur = map.get(n1) ?? [];
            const cur2 = map.get(n2) ?? [];
            cur.push(n2);
            cur2.push(n1);
            map.set(n1, cur);
            map.set(n2, cur2);
        }
        return map;
    }

    const adj1 = buildAdj(edges1);
    const adj2 = buildAdj(edges2);

    const findDiameter = (node, adj, parent) =>{
        const children = adj.get(node) ?? [];
        let maxChildLeaf = new PriorityQueue({
            compare: (a, b) => a - b
        });
        maxChildLeaf.enqueue(0);
        maxChildLeaf.enqueue(0);
        let maxDia = 0;
        for(const child of children){
            if(child !== parent){
              const [curDia, curLeaf] = findDiameter(child, adj, node);
              maxChildLeaf.enqueue(curLeaf);
              maxChildLeaf.dequeue();
              maxDia = Math.max(maxDia, curDia);
            }
        }
        const arr = maxChildLeaf.toArray();
        const sum = arr.reduce((acc, e) => acc + e, 0);
        return [Math.max(sum, maxDia), 1 + Math.max(...arr)];
    }

    const [d1] = findDiameter(0, adj1, -1);
    const [d2] = findDiameter(0, adj2, -1);

    return Math.max(d1, d2, Math.ceil(d1 / 2) + 1 + Math.ceil(d2 / 2));
};