/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    
    const decrements = Array(nums.length).fill(0);

    for(const [from, to] of queries){
        decrements[from] -= 1;
        decrements[to + 1] += 1;
    }

    const set = new Set();
    let acc = 0;
    for(let i = 0; i < nums.length; i++){
        acc += decrements[i];
        const sum = nums[i] += acc;
        set.add(sum < 0 ? 0 : sum);
    }

    return set.size === 1 && set.has(0);

};