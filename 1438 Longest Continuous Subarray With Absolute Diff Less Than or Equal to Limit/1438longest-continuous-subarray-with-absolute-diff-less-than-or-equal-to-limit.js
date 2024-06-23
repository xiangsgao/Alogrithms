


var longestSubarray = function(nums, limit) {
    let left = 0;
    let right = 0;
    const minQue = [];
    const maxQue = [];
    let res = 0;
    for(let right = 0; right < nums.length; right++){
      while(maxQue.length && maxQue[maxQue.length - 1] < nums[right]){
        maxQue.pop();
      }

      while(minQue.length && minQue[minQue.length - 1] > nums[right]){
        minQue.pop();
      }


      minQue.push(nums[right]);
      maxQue.push(nums[right]);

      while(maxQue[0] - minQue[0] > limit){
        if(nums[left] === maxQue[0]){
            maxQue.shift();
        }
        if(nums[left] === minQue[0]){
            minQue.shift();
        }
        left += 1;
      }
      
        res = Math.max(res, right - left + 1);
    }  

    return res;
};