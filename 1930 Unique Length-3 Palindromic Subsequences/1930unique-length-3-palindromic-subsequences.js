/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    
    //  O N^2


    const res = new Set();
    let retval = 0;
    for(let i = 0; i < s.length; i++){
        const firstC = s[i];

        if(res.has(firstC)){
            continue;
        }

        res.add(firstC);

        let lastIdx = -1;
        for(let j = s.length - 1; j >= i + 2; j--){
            if(s[j] === firstC){
                lastIdx = j - 1;
                break;
            }
        }

        let set = new Set();

        for(; lastIdx >= i + 1; lastIdx--){
            set.add(s[lastIdx]);
        }

        retval += set.size;
    }

    return retval;
};