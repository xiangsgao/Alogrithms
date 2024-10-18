/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    const N = nums.length;

    let ans = 0;
    let left = 0;
    let pairs = 0;
    const counts = new Map();

    for(let right = 0; right < N; right++){
        pairs += (counts.get(nums[right]) ?? 0);
        counts.set(nums[right], (counts.get(nums[right]) ?? 0) + 1);

        // shrink the window
        while(pairs >= k){
            counts.set(nums[left], counts.get(nums[left]) - 1);
            pairs -= counts.get(nums[left]);
            left += 1;
        }
        ans += left;
    }

    return ans;
};