const findWidth = (i, nums) =>{
    let right = i;
    let lastRight = i;
    while(right < nums.length){
        if(nums[++right] >= nums[i]){
            lastRight = right;
        }
    }

    return lastRight - i;
}
var maxWidthRamp = function(nums) {
   const maxRight = [nums[nums.length - 1]];
   for(let i = nums.length - 2; i >= 0; i--){
        maxRight.unshift(Math.max(nums[i], maxRight[0]));
   }

   let res = 0;
   let left = 0;
   let right = 0;
   while(right < nums.length){
    while(nums[left] > maxRight[right]){
        left += 1;
    }
    res = Math.max(res, right - left);
    right++; 
   }
   return res;
};