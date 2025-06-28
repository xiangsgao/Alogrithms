/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {

    const arr = [];
    const leftSum = [];
    const rightSum = [];

    let res = 0;
    for(let i = 0; i < cardPoints.length; i++){
        res+= cardPoints[i];
        leftSum.push(res);
    }

    res = 0;
    for(let j = cardPoints.length - 1; j >= 0; j--){
        res+= cardPoints[j];
        rightSum.unshift(res);
    }


    let max = -Infinity;
    // means take amount left from the left end
    for(let left = 0; left <= k; left++){
       const nLeft = leftSum[left - 1] ?? 0; // decrement by 1 because if we take zero from the left then the sum should be zero for the left half
       const nRight = rightSum[rightSum.length - (k - left)] ?? 0; // same logic for the right half
       max = Math.max(nLeft + nRight, max);
    }

    return max;

};