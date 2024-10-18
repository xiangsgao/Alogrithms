/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const total = nums.reduce((e, acc) => e + acc, 0);

    const digitSum = nums.map(e => e.toString())
                    .join("")
                    .split("")
                    .reduce((acc, e) => acc + Number(e) , 0);

    console.log({total, digitSum});
    return Math.abs(total - digitSum);
};