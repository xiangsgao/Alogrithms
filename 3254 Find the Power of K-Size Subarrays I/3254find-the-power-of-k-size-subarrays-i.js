/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    
    const res = [];
    for(let i = 0; i < nums.length - k + 1; i++){
        let max = nums[i];
        let j = i + 1;
        while(j < i + k){
            if(j >= nums.length){
                j = i + k;
                break;
            }
            const cur = nums[j];
            if(cur != max + 1){
                break;
            }
            max = cur;
            j++;
        }

        if(j === i + k){
            res.push(max);
        }else{
            res.push(-1);
        }
    }

    return res;
};