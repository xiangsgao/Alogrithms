/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
   const sorted = [...nums].sort((a, b) => a - b);
   const map = new Map();
   const groups = [];
   for(const n of sorted){

        if(!groups.length || Math.abs(n - groups[groups.length - 1].back()) > limit){
            groups.push(new PriorityQueue({
                compare: (a, b) => a - b
            }));
        }

        groups[groups.length - 1].enqueue(n);
        map.set(n, groups.length - 1);
   }

    const res = [];
   for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        const group = groups[map.get(cur)];
        const e = group.dequeue();
        res[i] = e;
   }

   return res;

};