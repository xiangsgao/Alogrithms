/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums.length){
        return [];
    }
    const result = []
    const recursive = (curNums = nums, arr = []) =>{
        if(!curNums.length){
            result.push(arr);
        }

        for(let i = 0; i < curNums.length; i++){
            const copy = [...curNums];
            copy.splice(i, 1);
            recursive(copy, [...arr, curNums[i]]);
        }

    }

    recursive();
    return result;
};