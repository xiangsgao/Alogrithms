/**
 * @param {number[]} target
 * @return {number}
 */
 // cant solve, it is a greedy solution
 // notice that we can extend the current max raise to the right as long as the next number is less.
 // if the next number is greater then we cant extend the subarray and need to add the dif because these stand for the number of iterations to raise them
var minNumberOperations = function(target) {
    let res = target[0];
    for(let i = 1; i < target.length; i++){
        const prev = target[i - 1];
        const cur = target[i];
        if(cur > prev){
            res += cur - prev;
        }
    }

    return res;
};