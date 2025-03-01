/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // lots of annoying edge cases
var applyOperations = function(nums) {
    const map = new Map();
    
    const res = [];
    if(nums[0]){
        res.push(nums[0]);
    }else{
        map.set(0, true);
    }
    for(let i = 1; i < nums.length; i++){
        const prev = nums[i - 1];
        let cur = nums[i];
        if(cur === prev){
            if(prev !== 0){
                nums[i - 1] *= 2;
                nums[i] = 0;
                res[res.length - 1] *= 2;
            }
        }else if(cur !== 0){
            res.push(cur);
        }

        if(nums[i] === 0){
            map.set(i, true);
        }
    }

    for(const e of map.keys()){
        res.push(0);
    }

    return res;
};