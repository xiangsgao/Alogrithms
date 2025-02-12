/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    nums = nums.sort((a, b) => b - a)
    const map = new Map();
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i].toString().split("").map(e => Number(e)).reduce((acc, e) => acc + e, 0);
        
        const group = map.get(cur) ?? [];
        group.push(nums[i]);
        map.set(cur, group);

        if(map.get(cur).length > 1){
            max = Math.max(map.get(cur)[0] + map.get(cur)[1], max);
        }
    }

    if(max === -Infinity){
        return -1;
    }

    
    return max;
};