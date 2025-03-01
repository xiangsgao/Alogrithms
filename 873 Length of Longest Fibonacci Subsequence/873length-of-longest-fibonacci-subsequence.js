/**
 * @param {number[]} arr
 * @return {number}
 */
 // cant solve because failing to relize if you pick two numbers, rest of the numbers are fixed and set in stone

 // can also do a dp, just turn that while loop into a helper function that recursively get the next arr length and with cacheing
var lenLongestFibSubseq = function(arr) {
   const set = new Set();
   for(const n of arr){
    set.add(n);
   }

   let res = 0;
   for(let i = 0 ; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            let [prev, cur] = [arr[i], arr[j]];
            let next = prev + cur;
            // dp is recursion(prev, cur) with map as the cache
            let len = 2;
            while(set.has(next)){
                prev = cur;
                cur = next;
                next = prev + cur;
                len += 1;
                res = Math.max(res, len);
            }
        }
   }
    
   return res;
};