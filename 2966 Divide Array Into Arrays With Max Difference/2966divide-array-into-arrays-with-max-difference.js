/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    // size is multiples of 3 and a positive integer k.
    nums = nums.sort((a, b) => a - b);

    const arr = Array(nums.length / 3).fill().map(() => []);

    let j = 0;
    arr[j].push(nums[0]);
    for(let i = 1; i < nums.length; i++){
        if(Math.abs(arr[j][0] - nums[i]) <= k && arr[j].length < 3){
            arr[j].push(nums[i]);
        }else{
            if(arr[j].length !== 3){
                return [];
            }

            j++;
            arr[j].push(nums[i]);
        }
    }

    return arr;
};