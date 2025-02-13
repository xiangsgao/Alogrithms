/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const pq = new PriorityQueue({
        compare: (a, b) => a - b
    });


    for(const n of nums){
        pq.enqueue(n);
    }

    let answer = 0;
    while(!pq.isEmpty() && pq.front() < k){
        const first = pq.dequeue();
        const second = pq.dequeue();
        const res = Math.min(first, second) * 2 + Math.max(first, second);
        pq.enqueue(res); 
        answer += 1;
    }

    return answer;
};