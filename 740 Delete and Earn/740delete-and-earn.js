/**
 * @param {number[]} nums
 * @return {number}
 */

 // cant solve because i used set for keeping track of the deleted rather than a map for frequency
 // also did not cache optimally so TLE

// var deleteAndEarn = function(nums) {
//     const popped = new Map();
//     const recursion = (i = 0, picked = "") =>{


//         if(i >= nums.length){
//             return 0;
//         }

//         const key = `${i}:${picked}`;

//         if(cache.has(key)){
//             return cache.get(key);
//         }

//         const cur = nums[i];
//         if((popped.get(cur) ?? 0) !== 0){
//             return recursion(i + 1);
//         }

//         popped.set(cur + 1, (popped.get(cur + 1) ?? 0) + 1);
//         popped.set(cur - 1, (popped.get(cur - 1) ?? 0) + 1);
//         let res = cur + recursion(i + 1, [picked, `${cur}`].join(","));
//         popped.set(cur + 1, (popped.get(cur + 1) ?? 0) - 1);
//         popped.set(cur - 1, (popped.get(cur - 1) ?? 0) - 1);

//         res = Math.max(res, recursion(i + 1, picked));
//         return res;

//     }

//     return recursion();
    
// };



/*

    class Solution:
    def __init__(self):
        self.cache = {}

    def deleteAndEarn(self, nums: List[int]) -> int:
        points = defaultdict(int)
        max_num = 0

        for num in nums:
            points[num] += num
            max_num = max(max_num, num)

        return self.dfs(points, max_num)

    def dfs(self, points, num):
        if num == 0:
            return 0
        if num == 1:
            return points[num]
        if num in self.cache:
            return self.cache[num]
        self.cache[num] = max(self.dfs(points, num - 1), points[num] + self.dfs(points, num - 2))
        return self.cache[num]

*/

// this solution is basically count the frequency, remove duplicates, then sort
// dp is like the max at i index
// the max at i + 1 is just max at i - 1 or curEarn + max at i - 2 if cant use both
// if can use both then it is just curEarn + max at i - 1
// earn1 = max at i - 2, earn2 = max at i - 1
const deleteAndEarn = (nums) =>{
    const count = new Map();
    for(const n of nums){
        count.set(n, (count.get(n) ?? 0) + 1);
    }
    
    nums = [...(new Set(nums).values())].sort((a, b) => a - b);

    const dp = Array(nums.length).fill(0);

    let earn1 = 0;
    let earn2 = 0;

    for(let i = 0; i < nums.length; i++){
        const curEarn = nums[i] * count.get(nums[i]);

        // make sure we can use the cur value and the previous value
        // prev can not be 1 less than cur per the requirement
        let temp = 0;
        if(i > 0 && nums[i] === nums[i - 1] + 1){
            temp = earn2;
            earn2 = Math.max(curEarn + earn1, earn2);
            earn1 = temp;
        }else{
            const temp = earn2;
            earn2 = curEarn + earn2;
            earn1 = temp;
        }
    }

    return earn2;
    
    
}