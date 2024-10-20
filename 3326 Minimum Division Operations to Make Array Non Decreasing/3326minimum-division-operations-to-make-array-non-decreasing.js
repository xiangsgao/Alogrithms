/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
        let n = nums.length;
        let num = nums[n - 1];
        let cnt = 0;

        for (let i = n - 2; i >= 0; i--) {
            if (nums[i] > num) {
                for (let j = 2; j * j <= nums[i]; j++) {
                    if (nums[i] % j === 0) {
                        nums[i] = j;
                        cnt++;
                        break;
                    }
                }
            }
            if (nums[i] > num) {
                return -1;
            }
            num = nums[i];
        }

        return cnt;

};