/**
 * @param {string} s
 * @return {number}
 */

/*
var numDecodings = function(s) {
    const dp = new Map();
    dp.set(s.length, 1);

    const recursive = (i = 0) =>{
        if(dp.has(i)){
            return dp.get(i);
        }

        if(s[i] === '0'){
            return 0;
        }

        let result = recursive(i + 1)

        if(i + 1 < s.length && s[i] === '1' || (s[i] === '2' && "0123456".includes(s[i + 1]))){
            result += recursive(i + 2);
        }

        dp[i] = result;
        return result;
     
    }

    return recursive();


};
*/

var numDecodings = function (s) {
    // initialize the dp array with all 0s
    const strLen = s.length;
    const dp = new Array(strLen + 1).fill(0);
    // there is only one way to decode an empty string
    dp[0] = 1;
    // the first element of the dp array is 1 if the first character 
    // of the string is not '0', otherwise it's 0
    if (s[0] !== '0') {
        dp[1] = 1;
    } else {
        return 0;
    }

    // iterate through the input string starting from the 2nd character
    for (let i = 2; i <= strLen; ++i) {
        // if the current character is not '0', add the number of ways 
        // to decode the substring without the current character
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        // if the substring of the current and previous characters is a valid 
        // two-digit number, add the number of ways to decode the substring 
        // without the current and previous characters
        if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6')) {
            dp[i] += dp[i - 2];
        }
    }

    // return the number of ways to decode the input string
    return dp[strLen];
};
