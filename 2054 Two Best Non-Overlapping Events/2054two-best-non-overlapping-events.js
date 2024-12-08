/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    events = events.sort((a, b) => a[0] - b[0]);
    const que = new PriorityQueue({
        compare: (a, b) => a[0] - b[0]
    })
    let maxVal = 0;
    let maxSum = 0;

    for(const e of events){
        while(que.size() && que.front()[0] < e[0]){
            maxVal = Math.max(maxVal, que.dequeue()[1]);
        }
        maxSum = Math.max(maxVal + e[2], maxSum);
        que.enqueue([e[1], e[2]]);
    }

    return maxSum;

};