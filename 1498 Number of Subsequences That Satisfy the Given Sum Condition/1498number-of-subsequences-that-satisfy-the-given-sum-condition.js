/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // notes that order of the subsequence doesnt matter, we just need their number whose min plus max less than target, this means we can sort
 // check the previous submission due to mod issues
 // idea is to find the most right for each left and then add all the possible subsequnce of that window
 // the count is 2 to the power of x where x is the number of elements after left up to the target
 // e.g. l * * * r then the count is 2 to the power of 4 because 3 * + 1 r = 4 total
var numSubseq = function(nums, target) {
  const MOD = 1e9 + 7;
    nums.sort((a, b) => a - b);
    const n = nums.length;

    // Precompute powers of 2 up to n
    const pow2 = new Array(n).fill(0);
    pow2[0] = 1;
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i-1] * 2) % MOD;
    }

    let res = 0;
    let r = n - 1;
    for (let i = 0; i < n; i++) {
        // find the most right
        while (i <= r && nums[i] + nums[r] > target) {
            r--;
        }
        if (i > r) break;
        res = (res + pow2[r - i]) % MOD;
    }
    return res;
};