/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    

    while(nums.length > 1){
        const newArray = [];

        for(let i = 1; i < nums.length; i++){
            const sum = (nums[i] + nums[i - 1]) % 10;
            newArray.push(sum);
        }
        nums = newArray;
    }

    return nums.pop();
};