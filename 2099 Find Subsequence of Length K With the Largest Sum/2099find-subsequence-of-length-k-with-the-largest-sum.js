/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const pq = new PriorityQueue(([a], [b]) => b - a);
    let idx = 0;
    for(const n of nums){
        pq.enqueue([n, idx++]);
    }
    let res = [];
    for(let i = 0; i < k; i++){
        res.push(pq.dequeue());
    }
    res = res.sort((a, b) => a[1] - b[1]).map(e => e[0]);
    return res;
};