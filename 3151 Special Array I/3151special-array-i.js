/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    

    let prev = nums[0] % 2;

    for(let i = 1; i < nums.length; i++){
        const cur = nums[i] % 2;
        if(cur === prev){
            return false;
        }
        prev = cur;
    }

    return true;
};