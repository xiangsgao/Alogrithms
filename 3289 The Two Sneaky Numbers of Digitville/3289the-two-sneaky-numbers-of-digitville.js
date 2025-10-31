/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const set = new Set();
    const res = [];
    for(const n of nums){
        if(set.has(n)){
            res.push(n);
        }
        set.add(n);
        if(res.length === 2){
            return res;
        }
    }
};