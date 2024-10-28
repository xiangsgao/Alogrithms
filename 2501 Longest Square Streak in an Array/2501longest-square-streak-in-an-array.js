/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {

    const set = new Set(nums);
    let max = -1;
    for(let i = 0; i < nums.length; i++){
        let streak = 1;
        let cur = nums[i];
        while(set.has(cur * cur)){
            cur = cur * cur;
            streak++;
        }

        if(streak > 1 && streak > max){
            max = streak;
        }

    }

    return max;
};