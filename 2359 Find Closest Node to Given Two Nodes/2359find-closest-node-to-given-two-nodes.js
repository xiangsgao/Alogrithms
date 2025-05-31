/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
 // initial intution is to use dikstra on the graph to find the min distance of each node from the two sources and then just iterate from 0 to n - 1 to find which node has the minimum distance to both sources

// dont need to use dikstra because there is only at most one outgoing edge. no need to worry about multiple paths, also notice that the paths are unweighted so any regular bfs would work
 
var closestMeetingNode = function(edges, node1, node2) {
    const map = new Map();

    for(let from = 0; from < edges.length; from++){
        const to = edges[from];
        const cur = map.get(from) ?? [];
        cur.push(to);
        map.set(from, cur);
    }

    const bfs = (src, disMap) =>{
        const q = [[src, 0]]; // node, distance
        disMap.set(src, 0);
        while(q.length){
            const [node, dis] = q.shift();
            for(const nei of (map.get(node) ?? [])){
                if(!disMap.has(nei)){
                    q.push([nei, dis + 1]);
                    disMap.set(nei, dis + 1);
                }
            }
        }
    }

    const node1Dis = new Map();
    const node2Dis = new Map();

    bfs(node1, node1Dis);
    bfs(node2, node2Dis);

    let res = -1;
    let resDis = Infinity;

    for(let i = 0; i < edges.length; i++){
        if(node1Dis.has(i) && node2Dis.has(i)){
            const dis = Math.max(node1Dis.get(i), node2Dis.get(i));
            if(dis < resDis){
                resDis = dis;
                res = i;
            }
        }
    }

    return res
};