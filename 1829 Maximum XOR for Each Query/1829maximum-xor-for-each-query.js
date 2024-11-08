/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let xor = 0;
    for(const n of nums){
        xor ^= n;
    }

    let mask = (1 << maximumBit) - 1;
    const answer = [];

    for(const n of nums.reverse()){
        answer.push(xor ^ mask);
        xor ^= n;
    }

    return answer;
};