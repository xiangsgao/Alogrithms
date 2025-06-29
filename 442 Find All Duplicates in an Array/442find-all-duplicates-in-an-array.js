/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    const res = [];
    for(let i = 0; i < nums.length; i++){
        const cur = Math.abs(nums[i]);
        const curIdx = cur - 1;
        if(nums[curIdx] < 0){
            res.push(cur);
        }else{
            nums[curIdx] *= -1;
        }
    }

    return res;

};