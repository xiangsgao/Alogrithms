/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // realize that there are only three possible values in the array.
 // use three pointers for the most optimal solutions
 // l = 0, i = 1, r = 2
var sortColors = function(nums) {
    
    let l = 0;
    let r = nums.length - 1;
    let i = 0;

    const swap = (i, j) =>{
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while(i <= r){
        if(nums[i] === 0){
            swap(l, i);
            l++;
        }else if(nums[i] === 2){
            swap(i, r);
            r--;
            i--;
        }
        i+=1;
    }

    return nums;

};