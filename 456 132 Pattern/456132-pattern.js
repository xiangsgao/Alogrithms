/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // failed to realize the following below
 
// if we pick a k, we need a nums[j] which is greater than nums[k]. this can be found from the decreasing stack.
// to check if there exists an nums[i] which is less than nums[k], just need to check is there is a smaller nums[i] left of j. this can be found from a prefix min 
var find132pattern = function(nums) {

   const prefixMin = [];

   for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        const prev = prefixMin[i - 1] ?? Infinity;
        prefixMin[i] = Math.min(cur, prev);
   }

    const stack = [];
   for(let i = 0; i < nums.length; i++){
     const cur = nums[i];
     while(stack.length && nums[stack[stack.length -1]] <= cur){
        stack.pop();
     }

   // if k is i, we need a nums[j] which is greater than nums[k]. this can be found from the decreasing stack.
   // to get the i, just need to check is there is a smaller nums[i] left of j. this can be found from a prefix min 
    if(stack.length){
        const j = stack[stack.length - 1];
        
        // check if there exists an i which is less than the chosen k
        if((prefixMin[j - 1] ?? Infinity) < cur){
            return true;
        }
    }
     stack.push(i);

   }


    return false;
};