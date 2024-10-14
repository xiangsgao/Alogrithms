/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const heap = new PriorityQueue({
        compare: (a, b) => b - a
    });


    for(const n of nums){
        heap.enqueue(n);
    }

    let sum = 0;
    for(let i = 0; i < k; i++){
        const topMost = heap.dequeue();
        sum += topMost;
        const newVal = Math.ceil(topMost / 3);
        heap.enqueue(newVal);
    }

    return sum;
};