/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

 // cant solve because tabulation is a very confusing.
 // should be able to come up with a memorization using recursion tho. use the two pointers for both string. solve the medium if refresh is needed
var shortestCommonSupersequence = function(str1, str2) {
    const M = str2.length;
    const N = str1.length;
    let prev = Array(M).fill().map((_, i) =>{
        const substr = str2.substring(i, str2.length);
        return substr;
    });

    
    let cur;
    for(let i = N - 1; i >= 0; i--){
        cur = Array(M).fill("");
        cur.push(str1.substring(i, str1.length));
        for(let j = M - 1; j >= 0; j--){
            if(str1[i] === str2[j]){
                cur[j] = str1[i] + (prev[j + 1] ?? "");
            }else{
                const res1 = str1[i] + prev[j];
                const res2 = str2[j] + cur[j + 1];
                if(res1.length < res2.length){
                    cur[j] = res1;
                }else{
                    cur[j] = res2;
                }
            }
        }
        prev = cur;
    }
    return cur[0];
};
