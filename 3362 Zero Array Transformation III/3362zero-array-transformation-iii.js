/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
 // very tricky problem and i still do not fully understand the coding solution
 // but conceptually, you sort the queries. then as you iterate, you create two groups, one is for queries avaiable for the index you are at and other for the queries you have used. you pick whichever queries that has the latest ending index to because you want to removed the most queries. if no queries are available then you return -1. otherwise as long as the queries you used so far can knock the nums[i] to zero, you are good and can just continue. if one of the used queries are out of the index you are at, you removed that from the used. the res output is the avaiable quries remaining because these are the unused queries.

// this guy has good video
// https://www.youtube.com/watch?v=c1Iwwn_G04A
var maxRemoval = function (nums, queries) {
    queries.sort((a, b) => a[0] - b[0]);
    const heap = new MaxPriorityQueue();
    const deltaArray = new Array(nums.length + 1).fill(0);
    let operations = 0;

    for (let i = 0, j = 0; i < nums.length; i++) {
        operations += deltaArray[i];
        while (j < queries.length && queries[j][0] === i) {
            heap.push(queries[j][1]);
            j++;
        }
        while (operations < nums[i] && !heap.isEmpty() && heap.front() >= i) {
            operations += 1;
            deltaArray[heap.pop() + 1] -= 1;
        }
        if (operations < nums[i]) {
            return -1;
        }
    }
    return heap.size();
};