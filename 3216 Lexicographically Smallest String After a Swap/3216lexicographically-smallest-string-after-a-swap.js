/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    s = s.split("");


    for(let i = 1; i < s.length; i++){
        const cur = Number(s[i]);
        const pre = Number(s[i - 1]);

        if(cur < pre && (cur % 2) === (pre % 2)){
            s[i] = `${pre}`;
            s[i - 1] =  `${cur}`;
            break;
        }
    }

    return s.join("");
};