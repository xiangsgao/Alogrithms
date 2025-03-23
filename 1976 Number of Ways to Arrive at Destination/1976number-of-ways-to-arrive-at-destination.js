/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
 // cant solve because very hard problem. the trick is to modified dijtraska. first realize we can count the number of paths to reach a previous node. if the current path min is equal to the existing min path, we can add up the count of the previous node to what we have currently, i.e. number of paths previous found to be min x plus the number of paths to reach the same min x on this current path. if else it is the new min, we set it to the ways that reach the previous node, effelctly start a new count
var countPaths = function(n, roads) {

    const MOD = Math.pow(10, 9) + 7;
    
    const adj = new Map();

    for(const [from, to, weight] of roads){
        const cur = adj.get(from) ?? [];
        const cur2 = adj.get(to) ?? [];

        cur.push([to, weight]);
        cur2.push([from, weight]);
        adj.set(from, cur);
        adj.set(to, cur2);
    }


    const que = new PriorityQueue((a,b) => a[1] - b[1]);

    const visited = new Set();

    que.enqueue([0, 0]);

    const min = Array(n).fill(Infinity); 
    min[0] = 0;

    const count = Array(n).fill(0);
    count[0] = 1;

    while(!que.isEmpty()){
        const [node, dist] = que.dequeue();
        

        for(const [nei, weight] of (adj.get(node) ?? [])){
            const newDist = weight + dist;

            if(newDist < min[nei]){
                que.enqueue([nei, newDist]);
                min[nei] = newDist;
                count[nei] = count[node];
            }else if(newDist === min[nei]){
                count[nei] = (count[nei] + count[node]) % MOD;
            }
        }
    }

    return count.pop();


};