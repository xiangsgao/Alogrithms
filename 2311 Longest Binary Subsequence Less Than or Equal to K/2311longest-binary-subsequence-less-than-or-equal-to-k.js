/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 // the idea is to start at the end and find the longest contingues substring of binary string greater than k and then just add all the remaining zeroes left of it. this gets you the longest subsequence
var longestSubsequence = function(s, k) {
    const bits = k.toString(2).length;

    let res = 0;
    let cur = 0;
    s = s.split("").reverse().join(""); // it starting from end easier by reversing
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(c === '0'){
            res+=1; // dont care about zeroes. they are free length
        }else{
            cur += (1 << i); // get the number value of current binary string 
            if(i < bits && cur <=k){ // if it is smaller than k. the i < bits is to make sure the current index is in bounds
                res += 1;
            }
        }
    }
    return res;
};