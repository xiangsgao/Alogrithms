/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function(heights, queries) {
    const res = queries.map(e => -1);
    const map = new Map();

    for(let i = 0; i < queries.length; i++){
        const [x, y] = queries[i];
        if(x === y){
            res[i] = x;
            continue;
        }
        const xHeight = heights[x];
        const yHeight = heights[y];
        const largest = Math.max(x, y);
        const smallest = Math.min(x, y);
        if(heights[largest] > heights[smallest]){
            res[i] = largest;
            continue;
        }

        const max = Math.max(xHeight, yHeight);
        const cur = map.get(largest) ?? [];
        cur.push([max, i]);
        map.set(largest, cur);
    }

    const que = new PriorityQueue({
        compare: ([a], [b]) => a - b
    })

    for(let i = 0; i < heights.length; i++){
        const h = heights[i];
        for(const [qh, qi] of (map.get(i) ?? [])){
            que.enqueue([qh, qi]);
        }

        while(!que.isEmpty() && h > que.front()[0]){
            const [qh, qi] = que.dequeue();
            res[qi] = i;
        }
    }

    return res;
};