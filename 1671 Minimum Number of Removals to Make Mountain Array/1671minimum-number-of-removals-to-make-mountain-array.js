/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    const increasingLeft = nums.map(() => 1);
    const increasingRight = nums.map(() => 1);

    for(let i = 1; i < nums.length; i++){
        for(let j = i - 1; j >= 0; j--){
            if(nums[j] < nums[i]){
                increasingLeft[i] = Math.max(increasingLeft[i], increasingLeft[j] + 1);
            }
        }
    }

    for(let i = nums.length - 2; i >= 0; i--){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] < nums[i]){
                increasingRight[i] = Math.max(increasingRight[i], increasingRight[j] + 1);
            }
        }
    }



    let toRemove = Infinity;
    for(let i = 1; i < nums.length - 1; i++){ 
        const leftSide = increasingLeft[i];
        const rightSide = increasingRight[i];
        if(leftSide === 1 || rightSide === 1){
            continue;
        }
        const maxLen = leftSide + rightSide - 1;
        const newRemove = nums.length - maxLen;
        toRemove = Math.min(toRemove, newRemove); 
    }

    return toRemove === Infinity ? 0 : toRemove;
};