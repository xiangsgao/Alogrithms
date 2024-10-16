/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let l = 0;
    let res = 0;

    for(let i = 0 ; i < s.length; i++){
        if(s[i] === "0"){
            res += i - l;
            l++;
        }
    }

    return res;
};