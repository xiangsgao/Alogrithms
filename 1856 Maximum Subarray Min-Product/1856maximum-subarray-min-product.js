/**
 * @param {number[]} nums
 * @return {number}
 */

 // cant solve because failed to realize that if you pick a minimum value, the rest of the numbers in the array has to be greater than that minimum. this means a monotancially increasing stack can be used alongside prefix sum to calcaulte max ask here

 // very diffcult problem and there is bug with the javascript code
var maxSumMinProduct = function(nums) {
    let res = 0;

    const stack = [];

    const prefix = [0];

    for(const n of nums){
        prefix.push(prefix[prefix.length - 1] + n);
    }

    for(let i = 0; i < nums.length; i++){
        const n = nums[i];

        let newStart = i;
        while(stack.length && stack[stack.length -1][1] > n){
            const [start, val] = stack.pop();
            const total = prefix[i] - prefix[start];
            res = Math.max(res, val * total);
            newStart = start; // update this becasue this subarray can be extended to the left because as long as the left is equal or greater than the cur n
        }

        stack.push([newStart, n]);
    }


    for(const [start, val] of stack){
        const total = prefix[prefix.length - 1] - prefix[start];
        res = Math.max(total * val, res);
    }

    return res % (Math.pow(10, 9) + 7);
};