/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let left = 0;
    const count = {"T": 0, "F": 0};
    let res = 0;
    for(let right = 0; right < answerKey.length; right++){
        const cur = answerKey[right];
        count[cur] += 1;

        // while count of T or count of F is less than K, it is valid 
        // conversly, the below would be invalid window
        while(count["T"] > k && count["F"] > k){
            const leftCur = answerKey[left++];
            count[leftCur] -= 1;
        }

        res = Math.max(right - left + 1, res);
    }

    return res;
};