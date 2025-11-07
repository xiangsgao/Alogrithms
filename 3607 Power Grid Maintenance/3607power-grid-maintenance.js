/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
 // solution is pretty staright forward. we need to find the stations that are connected and find the minimum of these connections if lookup is offline
 // we just use dfs to build all the componenets and use a minheap to heap which of these are the smallest

var processQueries = function(c, connections, queries) {
    const adj = new Map();

    for(const [from, to] of connections){
        const fromMap = adj.get(from) ?? [];
        const toMap = adj.get(to) ?? [];

        fromMap.push(to);
        toMap.push(from);
        adj.set(from, fromMap);
        adj.set(to, toMap);
    }

    const online = new Set();
    const stationGroup = new Map();
    const minHeaps = new Map();

    // this is for building the connected componenet
    const dfs = (station, groupId) =>{

        if(online.has(station)){
            return;
        }

        online.add(station);
        stationGroup.set(station, groupId);
        const heap = minHeaps.get(groupId) ?? new PriorityQueue((a, b) => a - b);
        heap.enqueue(station);
        minHeaps.set(groupId, heap);

        for(const n of (adj.get(station) ?? [])){
            dfs(n, groupId);
        }
    }

    // stations are 1 index, build the initially connection stations
    for(let i = 1; i < c + 1; i++){
        dfs(i, i);
    }

    const res = [];

    for(const [type, station] of queries){
        if(type === 1){
            if(online.has(station)){
                res.push(station);
            }else{
                const groupId = stationGroup.get(station);
                const heap = minHeaps.get(groupId);
                while(!heap.isEmpty() && !online.has(heap.front())){
                    heap.dequeue();
                }
                res.push(heap.front() ?? -1);
            }
        }else{
            online.delete(station);
        }
    }   



    return res;
};