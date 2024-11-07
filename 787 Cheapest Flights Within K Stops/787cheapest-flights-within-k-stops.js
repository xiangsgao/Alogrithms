/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    
    const map = new Map();
    for(const [from, to, price] of flights){
        const cur = map.get(from) ?? [];
        cur.push([price, to]);
        map.set(from, cur);
    }

    const que = new PriorityQueue({
       compare: ([a, stop], [b, stop1]) => {
            if(stop > k + 1){
                return 1;
            }
            if(stop1 > k + 1){
                return -1;
            }
            return a - b
        }
    });

    que.enqueue([0, 0, src]);
    const visited = new Map();
    const minCosts = Array(n).fill(Infinity);
    minCosts[src] = 0;
    while(!que.isEmpty()){
        const [cost, stops, node] = que.dequeue();

        if((visited.get(node) ?? Infinity) < stops){
            continue;
        }

        visited.set(node, stops);

        for(const [cost1, node1] of map.get(node) ?? []){
            let newCosts = cost + cost1;
            const newStops = stops + 1;
            if(newStops > k + 1){
                newCosts = Infinity;
            }
            if(minCosts[node1] > newCosts){
                minCosts[node1] = newCosts;
            }

            que.enqueue([newCosts, newStops, node1]);
        }
    }  
    
    return minCosts[dst] === Infinity ? -1 : minCosts[dst];

};