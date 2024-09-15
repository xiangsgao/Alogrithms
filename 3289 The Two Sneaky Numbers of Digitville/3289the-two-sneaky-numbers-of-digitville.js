/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const map = new Map();
    const retval = []; 
    for(const num of nums){
        map.set(num, (map.get(num) ?? 0) + 1);
        if(map.get(num) === 2){
            retval.push(num);
        }
    }

    return retval;
};