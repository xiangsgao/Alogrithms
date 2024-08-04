/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    // build the ajacency matrix
    const adj = new Map();

    for(let i = 0; i < n - 1; i++){
        const toList = [i + 1];
        adj.set(i, toList);
    }

    const cache = new Map();

    const dfs = (current = 0) =>{
        if(cache.has(current)){
            return cache.get(current);
        }

        if(current === n - 1){
            cache.set(current, 0);
            return cache.get(current);
        }

        // else brute force the toList
        const toList = adj.get(current);
        cache.set(current, Infinity);
        for(const to of toList){
            const currentMin = cache.get(current);
            cache.set(current, Math.min(1 + (cache.get(to) ?? dfs(to)), currentMin));
        }
        return cache.get(current);
    }

    const res = [];

    for(const e of queries){
        cache.clear();
        const [from, to] = e;
        adj.get(from).push(to);
        const shortestJumps = dfs();
        res.push(shortestJumps);
    }

    return res;
};