/**
 * @param {number[]} nums
 * @return {number}
 */
 // cant solve because did realize to look for invalid third num
var triangleNumber = function(nums) {
    let res = 0;

    nums = nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] === 0){
            continue;
        }

        let k = i + 2; // third num
        for(let j = i + 1; j < nums.length - 1; j++){
            while(k < nums.length && nums[i] + nums[j] > nums[k]){
                k++; // keep moving the third num pointer until we find one that is invalid
            }
            res += k - j - 1; // all the inbetween are valid values 
        }
    }

    return res;
};