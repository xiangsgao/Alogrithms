/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

 // didnt solve because i did not catch edge cases and made a bug for Array(size).fill(false);
 // idea is to pass three variables in backtrack. first is the start idx to start picking numbers, 2nd is the number of sets left to complete, third is the sum of the current set
 var canPartitionKSubsets = function(nums, k) {
    const total = nums.reduce((acc, e) => acc + e, 0);
    if (total % k !== 0) return false;
    const target = total / k;

    nums.sort((a, b) => b - a); // sort descending for optimization
    if (nums[0] > target) return false;

    const used = Array(nums.length).fill(false);

    const backtrack = (startIndex, k, subsetSum) => {
        if (k === 0) return true;

        if (subsetSum === target)
            return backtrack(0, k - 1, 0);

        for (let i = startIndex; i < nums.length; i++) {
            if (used[i] || subsetSum + nums[i] > target)
                continue;

            used[i] = true;
            if (backtrack(i + 1, k, subsetSum + nums[i]))
                return true;
            used[i] = false;

            // Optimization: if we can't place nums[i] in a new subset,
            // then no point trying other unused elements of same value
            if (subsetSum === 0) break;
        }

        return false;
    };

    return backtrack(0, k, 0);
};