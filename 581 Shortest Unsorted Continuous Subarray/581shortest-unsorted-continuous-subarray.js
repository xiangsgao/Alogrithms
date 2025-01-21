/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
  // monotonic stack 

  const stack = [];
  let firstIdx = nums.length - 1;
  for(let i = 0; i < nums.length; i++){
    const cur = nums[i];
    while(stack.length && nums[stack[stack.length - 1]] > cur){ // if top of stack is greater than the cur [2,6,4,8,10,9,15]
         const idx = stack.pop();
         firstIdx = Math.min(idx, firstIdx);
    }

    stack.push(i);
  }

  

  let lastIdx = 0;
  for(let i = nums.length - 1; i >= 0; i--){
    const cur = nums[i];
    while(stack.length && nums[stack[stack.length - 1]] < cur){ // if top of stack is greater than the cur [2,6,4,8,10,9,15]
         const idx = stack.pop();
         lastIdx = Math.max(idx, lastIdx);
    }

    stack.push(i);
  }


  if(firstIdx >= lastIdx){
    return 0;
  }

  return lastIdx - firstIdx + 1;




};

/**
     let min 
     [2,6,4,8,10,9,15]
        i = 1 .....
        firstIndexOutOfOrder = 1
        lastIndexOutOfOrder = 5
                   
 */