/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const recursive = (copyCandidates = candidates, arr = [], curSum = 0) =>{

        if(curSum > target || !copyCandidates.length){
            return;
        }

        if(curSum === target){
            result.push(arr);
            return;
        }
        
        recursive(copyCandidates, [...arr, copyCandidates[0]], curSum + copyCandidates[0]);
        recursive(copyCandidates.slice(1, copyCandidates.length), arr, curSum);
    }

    recursive();

    return result;
};