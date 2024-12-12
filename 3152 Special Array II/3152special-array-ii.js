/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    const prefix = [-1];
    const result = [];
    for(let i = 1;i < nums.length; i++){
        const prev = nums[i - 1] % 2;
        const cur = nums[i] % 2;

        if(prev === cur){
            prefix[i] = i - 1;
        }else{
            prefix[i] = prefix[i - 1];
        }
    }

    for(const [from, to] of queries){
        const invalidFrom = prefix[to];
        result.push(from > invalidFrom);
    }

    return result;
};