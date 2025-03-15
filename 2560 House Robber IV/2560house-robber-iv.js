/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // couldnt solve because not realizing you can binary search base on all the max capability. all the nums smaller than the capability add up to k. you increase the capabaility, more possible values to add up to k
var minCapability = function(nums, k) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    let left = min;
    let right = max;

    const valid = (cap) =>{
        // doesnt matter if cap does not exist in nums
        let i = 0;
        let count = 0;
        while(i < nums.length){
            if(nums[i] <= cap){
                i += 2;
                count += 1;
            }else{
                i += 1;
            }
            if(count === k){
                break;
            }
        }

        return count === k;
    }

    let res = 0;
    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);

        if(valid(mid)){
            // move more left
            res = mid;
            right = mid - 1;
        }else{
             left = mid + 1;
        }
    }

    return res; 

};