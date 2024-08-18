/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    let left = 0;
    let right = 1;
    if(k === 1){
        return nums;
    }
    const map = new Map();
    for(let i = k - 1; i < nums.length; i++){
        map.set(i, false);
    }

   
    while(right < nums.length){
        if((nums[right] <= nums[right - 1]) || (Math.abs(nums[right] - nums[right - 1]) !== 1)){
            if(map.get(right) === false){
                map.set(right, -1);
            }
            left = right;
            right++;
        }else if(right - left === k - 1){
            map.set(right, nums[right]);
            left++;
            right++;
        }else{
            right++;
        }
     
    }

    return [...map.values()].map(e => e === false ? -1 : e );
};