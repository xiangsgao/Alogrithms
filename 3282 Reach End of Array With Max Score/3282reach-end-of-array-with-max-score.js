/**
 * @param {number[]} nums
 * @return {number}
 */

 // tabulation dynamic programming not effient enough
 // greedy solution, cant figoure out. need prove, no understand proof
 // actually, the max jump is just number of jumps to the end times from i multiply nums[i]
var findMaximumScore = function(nums) {
    // const scores = Array(nums.length).fill(0);
    // for(let i = 1; i < nums.length; i++){
    //     for(j = i - 1; j>= 0; j--){
    //         const newScores = ((i - j) * nums[j]) + scores[j];
    //         if(newScores > scores[i]){
    //             scores[i] = newScores;
    //         }
    //     }
    // }

    // return scores.pop();

    // greedy
    let i = 0;
    let scores = 0;
    while(i < nums.length - 1){
        let j = i + 1;
        while(nums[j] <= nums[i] && j < nums.length - 1){
            j++;
        }
        scores += (j - i) * nums[i];
        i = j;
    }

    return scores;
    
};