/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 // failed to realize that stack is already the answer, you dont need to assign stack to the res if stack.length === k
 // more importantly, you only push onto the stack if the stack.length is < k. this ensures stack is always the most competitve  
var mostCompetitive = function(nums, k) {
    
    const stack = [];
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        while(stack.length && stack[stack.length - 1] > cur && (stack.length  + (nums.length - i)) > k){
            stack.pop();
        }

        // only push if stack.length is < k. is === k, this means current addition will make stack less competitive 
        if(stack.length < k){
            stack.push(cur);
        }
    }



    return stack;

};