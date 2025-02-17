/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */

 // failed to solve cuz i dont know dikstra can be used here.
 // probabliity means all costs will be monotonically decreasing as we transverse, this means greedy alogrithm like choosing the greatest probability path will work
var maxProbability = function(n, edges, succProb, startNode, endNode) {
    // bfs all the nodes
    // but greedily choosing the next node by least cost
    // update the min costs in the graph

    // build adj
    const map = new Map();
    for(let i = 0; i < edges.length; i++){
        const [from, to] = edges[i];
        const cost = succProb[i];
        const listFrom = map.get(from) ?? [];
        const listTo = map.get(to) ?? [];
        listFrom.push({n: to, cost});
        listTo.push({n: from, cost});
        map.set(from, listFrom);
        map.set(to, listTo);
    }

    const stack = new PriorityQueue({
        compare: ([_, a], [__, b]) =>  b - a
    });
    const costs = Array(map.size).fill(0);
    stack.enqueue([startNode, 1]);
    const visited = new Set();
    while(!stack.isEmpty()){
        const [node, c] = stack.dequeue();
        visited.add(node);
        const neighbors = map.get(node) ?? [];

        for(const {n, cost} of neighbors){
            const newCost = c * cost;
            costs[n] = Math.max(newCost, costs[n]);
            if(!visited.has(n)){
               stack.enqueue([n, newCost]);
            }
        }
    }
    
    return costs[endNode] ?? 0;

};