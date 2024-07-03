/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {

    if(nums.length <= 3){
        return 0;
    }

    let answer = Number.POSITIVE_INFINITY;
    const recursive = (k = 3, arr = nums.sort((a, b) => a-b)) =>{
        if(k === 0){
            const max = arr[arr.length - 1];
            const min = arr[0];
            answer = Math.min(answer, max - min);
            return;
        }

        // remove from the left
        recursive(k - 1, arr.slice(1, arr.length));
        // remove from the right
        recursive(k - 1, arr.slice(0, arr.length - 1));

    }

    recursive();
    return answer;

};