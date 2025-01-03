/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    

    const sums = nums.reduce((acc, e) => {
        return acc + e;
    }, 0);

    let curSum = 0;
    let res = 0;
    for(let i = 0; i < nums.length - 1; i++){
        const n = nums[i];
        curSum += n;
        const rightSplitSum = sums - curSum;
        if(curSum >= rightSplitSum){
            res += 1;
        }
    }

    return res;

};