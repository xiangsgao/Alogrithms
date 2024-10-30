/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let left = 0;
    let right = 0;
    let min = 0;
    while(right < nums.length - 1){
        let far = 0;
        for(let i = left; i < right + 1; i++){
            far = Math.max(far, i + nums[i]);
        }
        left = right + 1;
        right = far;
        min++;
    }  

    return min;
};