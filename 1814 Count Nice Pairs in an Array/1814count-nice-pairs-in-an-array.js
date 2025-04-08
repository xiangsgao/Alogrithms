/**
 * @param {number[]} nums
 * @return {number}
 */
 // cant solve because not realizing we can do algebra and count the pairs. new pairs is just simple adding math. 
var countNicePairs = function(nums) {
    
    /**
    
        nums[i] -  rev(nums[i]) == nums[j] - rev(nums[j])
     */

     const MOD = Math.pow(10, 9) + 7;
     const rev = nums.map(e => Number(e.toString()
                                .split("")
                                .reverse()
                                .join("")));

    const map = new Map();
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        const n = nums[i];
        const r = rev[i];
        const dif = n - r;
        if(map.has(dif)){
            res += map.get(dif);
        }

        map.set(dif, (map.get(dif) ?? 0) + 1);
    }

    return res % MOD;
};