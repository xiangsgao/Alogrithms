/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    
    const que = new PriorityQueue((a, b) =>{
        return a[1] - b[1];
    });
    let i = 0;
    for(const n of nums){
        que.enqueue([i, n]);
        i++;
    }

    while(k){

        const [i, e] = que.dequeue();
        nums[i] *= -1;
        que.enqueue([i, nums[i]]);

        k--;
    }

    return nums.reduce((acc, e) => acc + e,0);


};