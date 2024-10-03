/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const sum = nums.reduce((acc, e) => acc + e, 0);
    const target = sum % p;
    if(target === 0){
        return 0;
    }

    let res = nums.length;
    let curSum = 0;
    const map = new Map();
    map.set(0, -1);
    for(let i = 0; i < nums.length; i++){
        const n = nums[i];
        curSum = (curSum + n) % p;
        const prefix = (curSum - target + p) % p
        if(map.has(prefix)){
            const len = i - map.get(prefix);
            res = Math.min(res, len);
        }
        map.set(curSum, i);
    }

    if(res === nums.length){
        return -1;
    }
    return res;


};