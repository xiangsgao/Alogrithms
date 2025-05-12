/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function(edges) {

    const map = new Map();
    
    for(const [edge1, edge2] of edges){
        const list1 = map.get(edge1) ?? [];
        list1.push(edge2);
        map.set(edge1, list1);

        const list2 = map.get(edge2) ?? [];
        list2.push(edge1);
        map.set(edge2, list2);
    }


    let res = -Infinity;
    const dfs = (node, parent) =>{
        const heap = new PriorityQueue((a,b) => b - a);
        for(const child of map.get(node) ?? []){
            if(child !== parent){
                heap.enqueue(dfs(child, node));
            }
        }
        const [first, second] = [(heap.dequeue() ?? 0), (heap.dequeue() ?? 0)]
        res = Math.max(res, first + second);
        return first + 1;
    }

    dfs(0, null);

    return res;
};