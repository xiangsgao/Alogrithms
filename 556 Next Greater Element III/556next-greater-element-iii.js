/**
 * @param {number} n
 * @return {number}
 */

// cant solve because we need to figoure out the greedy solution below

 // the idea is to look from right to left to find the first decreasing element. then swap it with the element that is just larger than that
 // then sort all the elements after the that first none decreasing index
var nextGreaterElement = function(n) {
    
   const arr = n.toString().split("").map(e => Number(e));

   let idx = -1;
   for(let i = arr.length - 2; i >= 0; i--){
     const cur = arr[i];
     const prev = arr[i + 1];
     if(cur < prev){
        idx = i;
        break;
     }
   }

   if(idx === -1){
     return -1;
   }

  
   
   const swap1 = arr[idx]
   
   let swapIdx = idx + 1;
   let swapEl = arr[swapIdx];
   for(let i = idx + 1; i < arr.length; i++){
        if(arr[i] < swapEl && arr[i] > swap1){
            swapIdx = i;
            swapEl = arr[i];
        }
   }

   arr[idx] = swapEl;
   arr[swapIdx] = swap1;

   let res = [...arr.slice(0, idx + 1), ...arr.slice(idx + 1).sort((a, b) => a - b)];
   res = Number(res.map(e => e.toString()).join(""));
   if(res > Math.pow(2, 31) - 1){
     return -1;
   }

   return res;
};