/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
    const queue = new PriorityQueue({
        compare: ([a], [b]) => a - b
    });

    const bk = [...queries];
    intervals = intervals.sort(([a], [b]) => a - b);
    queries = queries.sort((a, b) => a - b);

    let idx = 0;
    const res = new Map(); 
    for(let i = 0; i < queries.length; i++){
        const q = queries[i];
        while(idx < intervals.length && intervals[idx][0] <= q){
            const dist = intervals[idx][1] - intervals[idx][0] + 1;
            queue.enqueue([dist, intervals[idx][1]]);
            idx += 1;
        }

        while(queue.size() && queue.front()[1] < q){
            queue.dequeue();
        }

        if(queue.size()){
             res.set(q, queue.front()[0]);
        }else{
             res.set(q, -1);
        } 
    } 

    return bk.map(e => res.get(e));
};