/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */

 // coundt solve because did not realize all the elements mod x has to be the same otherwise there is no way we can increase and decrease it to make them all equal

// another would be that the median of the sorted array will be the number that takes the least operations to reach so use that and find how many op is needed to reach the median


var minOperations = function(grid, x) {
    let all = grid.flat();
    let mod = all[0] % x;

    for (let num of all) {
        if (num % x !== mod) return -1;
    }

    all.sort((a, b) => a - b);
    let median = all[Math.floor(all.length / 2)];
    let operations = 0;

    for (let num of all) {
        operations += Math.abs(num - median) / x;
    }

    return operations;
};