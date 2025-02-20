/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const set = new Set(nums.map(e=> Number("0b" + e)));
    const N = nums.length;
    let res = -1;
    while(true){
        if(!set.has(++res)){
            break;
        }
    }

    let binary = res.toString(2);
    binary = "0".repeat(N - binary.length) + binary;
    return binary;
};