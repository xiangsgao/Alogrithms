/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const str1 = version1.split(".").map(e => Number(e));
    const str2 = version2.split(".").map(e => Number(e));



    const maxLen = Math.max(str1.length, str2.length);

    
    for(let i = 0; i < maxLen; i++){
        const cur1  = str1[i] ?? 0;
        const cur2 = str2[i] ?? 0;

        if(cur1 < cur2){
            return -1;
        }

        if(cur1 > cur2){
            return 1;
        }
    }


    return 0;
};