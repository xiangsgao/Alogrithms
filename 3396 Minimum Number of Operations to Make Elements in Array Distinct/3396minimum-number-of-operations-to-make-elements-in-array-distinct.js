/**
 * @param {number[]} nums
 * @return {number}
 */
 // so many edge cases man
var minimumOperations = function(nums) {
    
    let lastIdxToRemove = -1;
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        if(map.has(cur)){
            lastIdxToRemove = Math.max(map.get(cur), lastIdxToRemove);
        }
        map.set(cur, i);
    }
    let res = 0;
    
    while(lastIdxToRemove + 1 > 0){
        lastIdxToRemove -= 3;
        res++;
    }

    return res;
};