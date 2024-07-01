/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set();
    let retval = 0;
    for(const n of nums){
        if(set.has(n)){
            retval++;
        }else{
            set.add(n);
        }
    }

    const itera = set.values();
   
    for(let i = 0; i < set.size; i++){
        nums[i] = itera.next().value;
    }

    return set.size;
};