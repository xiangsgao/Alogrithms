/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    const left = new Map();
    const right = new Map();


    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        right.set(cur, (right.get(cur) ?? 0) + 1);
    }

    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        left.set(cur, (left.get(cur) ?? 0) + 1);
        right.set(cur, right.get(cur) - 1);
        const leftLen = i + 1;
        const rightLen = nums.length - i - 1;
        if(2 * left.get(cur) > leftLen && 2 * right.get(cur) > rightLen){
            return i;
        }
    }

    return -1;
};