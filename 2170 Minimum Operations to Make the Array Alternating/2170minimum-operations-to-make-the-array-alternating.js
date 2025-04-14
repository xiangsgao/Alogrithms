/**
 * @param {number[]} nums
 * @return {number}
 */
 // couldnt solve because fail to realize we can count the most frequent even and odd numbers. if they are not the same, we just need to flip all the numbers not those two alternative to these alternating. if the numbers are the same, we need to pick a second most frequent number as the alternative to minimize the numbers to flip
var minimumOperations = function(nums) {
   const even = {};
   const odd = {};

   for(let i = 0; i < nums.length; i++){
        const map = i % 2 === 0 ? even : odd;
        map[nums[i]] = (map[nums[i]] ?? 0) + 1;
   }

   const evenList = Object.entries(even).sort(([_,a], [__,b]) => b - a);
   const oddList = Object.entries(odd).sort(([___,a],[____,b]) => b - a);

   const [oddMaxNumber, oddMaxCount] = oddList[0] ?? [0, 0];
   const [evenMaxNumber, evenMaxCount] = evenList[0] ?? [0, 0];

    const fullLength = nums.length;
    if (oddMaxNumber !== evenMaxNumber) {
      return fullLength - oddMaxCount - evenMaxCount;
    }

    const oddSecondMaxCount = oddList?.[1]?.[1] ?? 0;
    const evenSecondMaxCount = evenList?.[1]?.[1] ?? 0;

    return Math.min(
        fullLength - oddMaxCount - evenSecondMaxCount,
        fullLength - evenMaxCount - oddSecondMaxCount
    );

};