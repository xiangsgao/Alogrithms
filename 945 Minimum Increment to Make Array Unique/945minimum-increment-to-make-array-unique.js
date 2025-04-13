/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    
    const stack = [];
    nums.sort((a, b) => a - b)
    let res = 0;
    
    for(let i = 0; i < nums.length; i++){
        let cur = nums[i];
        if(stack.length && stack.at(-1) >= cur){
            const dif = ((stack.at(-1) - cur) + 1);
            cur += dif; 
            res += dif;
        }
        stack.push(cur);
    }

    return res;
};