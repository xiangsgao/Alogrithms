/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // couldnt solve and to this day, still not understand the solution
 // basically we need to find the most frequent elements that are not k, then find the subarray with he most gap between most frequent and k
 // what the fck does this even mean? i have no idea

 /***
Use kadanes algorithm and the constraint that 1 <= nums[i] <= 50.

Imagine we do a search for each possible value (1 through 50) represented as X:

We can imagine that all nums[i] equal to X have a value of 1
We can imagine any number that is not equal to X or k to have a value of 0
We can imagine any number with a value equal to k has a value of -1
Then use Kadane's maximum subarray algorithm with that framing to find the maximum possible subarray, and by extension the best choice for your range of numbers to change.
 
*/

var maxFrequency = function(nums, k) {
    
  const count = Array(51).fill(0);

  let res = 0;

  for(const n of nums){
     count[n] = Math.max(count[n], count[k]) + 1;
     res = Math.max(res, count[n] - count[k]);
  }

   return count[k] + res;
};