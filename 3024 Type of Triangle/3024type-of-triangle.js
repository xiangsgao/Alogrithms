/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const set = new Set(nums);
    if(set.size === 1){
        return "equilateral";
    }

    const sum = nums.reduce((acc, e) => acc + e,0);
    for(const n of nums){
        const remainder = sum - n;
        if(remainder <= n){
            return "none";
        }
    }

    if(set.size === 2){
        return "isosceles";
    }

    return "scalene"

};