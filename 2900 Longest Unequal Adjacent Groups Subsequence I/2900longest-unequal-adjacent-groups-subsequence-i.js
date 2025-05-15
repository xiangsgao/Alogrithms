/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */

 // cant solve because the recursive backtrack gets time limited. greedy solution or dynamic programming in tabulation is needed

 // for the greedy solution, a solution that contains the first words is always among the longest. why? there is proof, groups only have two possible values, 1 and 0. if the first is longest, it should work for the subsequence as well.
 
var getLongestSubsequence = function(words, groups) {
    
    const N = words.length;

    let last = groups[0];
    let ans = [words[0]];

    for(let i = 1; i < N; i++){
        if(groups[i] !== last){
            last = groups[i];
             ans.push(words[i]);
        }
    }

    return ans;

};