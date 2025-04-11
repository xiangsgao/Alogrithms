/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */

 // cant solve because not realize that the first and the last number are always part of the sum. also not realize to find the max, it is just a split that gets you the max ajacent numbers, for min it is the vice verse, minimum sum of two adjacents. next just find the difference of the two.

var putMarbles = function(weights, k) {
    // edge case

    if(k === 1){
        return 0;
    }
    const splits = [];

    for(let i = 0; i < weights.length - 1; i++){
        const sum = weights[i] + weights[i + 1];
        splits.push(sum);
    }

    splits.sort((a, b) => a - b);
    const i = k - 1;
    // first and last element cancel out so no need to consider them mathmatically
    const maxScore = splits.slice(splits.length - i, splits.length).reduce((acc, e) => acc + e, 0);
    const minScore = splits.slice(0, i).reduce((acc, e) => acc + e, 0);

    return maxScore - minScore;
}