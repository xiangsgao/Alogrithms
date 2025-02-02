/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    for(let i = 1; i < nums.length; i++){
        const pre = nums[i - 1];
        if(pre > nums[i]){ 
            // nums[i] = 1
            // pre = 5   // [3,4,5   ,1,2] 
            const isSortedArray = [];
            for(let j = i; j < nums.length; j++){
                isSortedArray.push(nums[j]) // adding 1, 2
            }

            for(let j = 0; j < i; j ++){
                isSortedArray.push(nums[j]); // adding 3 4 5
            }

            // see if this is sorted 
            for(let j = 1; j < isSortedArray.length; j++){
                if(isSortedArray[j - 1] > isSortedArray[j]){
                    return false;
                }
            }

            return true;
        }
    }

    return true;
};