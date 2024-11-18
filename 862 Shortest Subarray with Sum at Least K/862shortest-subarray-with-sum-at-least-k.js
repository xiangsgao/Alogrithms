/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
   let res = Infinity;
   let curSum = 0;
   const minHeap = new PriorityQueue({
    compare: ([a], [b]) => a - b
   });

   for(let i = 0; i < nums.length; i++){
        curSum += nums[i];
        if(curSum >= k){
            res = Math.min(res, i + 1);
        }

        while(!minHeap.isEmpty() && curSum - minHeap.front()[0] >= k){
            const [prefix, endIdx] = minHeap.dequeue();
            res = Math.min(res, i - endIdx);
        }
        minHeap.enqueue([curSum, i]);
   }

    if(res ===Infinity){
        return -1
    }
   return res;
};