/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const right = [];
    const middle = [];
    const left = [];
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        if(cur < pivot){
            left.push(cur);
        }else if(cur === pivot){
            middle.push(cur)
           
        }else{
             right.push(cur);
        }
    }

    const final = [...left, ...middle, ...right];
    return final;
};