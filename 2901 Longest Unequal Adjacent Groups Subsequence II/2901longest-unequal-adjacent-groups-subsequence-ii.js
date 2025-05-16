/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */

 // couldnt solve but the answer is not that difficult to understand actually
 // we can dp dp
 // basically, as long as ith and jth fit the requirement, we can increament the count by + 1. dp[x] means the longest subsequence so for here
 // reconstruct the sequence from the dp involves just using another array to keep track of the "parent" aka the source index(i)
var getWordsInLongestSubsequence = function(words, groups) {
    const N = words.length;

    const dp = Array(N).fill(1);

    const isHamming = (w1, w2) =>{
        let res = 0; 
        for(let i = 0; i < w1.length; i++){
            if(w1[i] !== w2[i]){
                res += 1;
            }

            if(res > 1){
                break;
            }
        }

        return res === 1;
    }

    const prev = Array(N).fill(-1);
    for(let i = 0; i < N; i++){
        for(let j = i + 1; j < N; j++){
            // can is i to j a valid sequence
            if(
                groups[i] !== groups[j] && words[i].length === words[j].length
                && isHamming(words[i], words[j])
            ){
                if(dp[j] < dp[i] + 1){
                    dp[j] = dp[i] + 1;
                    prev[j] = i; // use to reconstruct the best 
                }
            }
        }
    }

    let bestI = 0;

    for(let i = 1; i < N; i++){
        if(dp[i] > dp[bestI]){
             bestI = i;
        }
    }

    const answer = [];

    let current = bestI;
    while(current !== -1){
        answer.unshift(words[current]);
        current = prev[current];
    }

    return answer;
};