/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    const retval = [];
    for(const n of nums){
        const str = n.toString().split("");
        let cur = 0;
        while(str.length){
            cur += Number(str.shift());
        }
        retval.push(cur);
    }

    return Math.min(...retval);
};