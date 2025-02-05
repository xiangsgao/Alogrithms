/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2){
        return true;
    }

    s1 = s1.split("");
    s2 = s2.split("");
    if(s1.length !== s2.length){
        return false;
    }



    let firstIdx = -1;
    let lastIdx = -1;

    for(let i = 0; i < s1.length; i++){
        const cur1 = s1[i];
        const cur2 = s2[i];
        if(cur1 !== cur2){
            if(firstIdx === -1){
                firstIdx = i;
            }else if(lastIdx === -1){
                lastIdx = i;
            }else{
                return false;
            }
        }
    }

    if(lastIdx === -1){
        return false;
    }

    return s1[firstIdx] === s2[lastIdx] && s1[lastIdx] === s2[firstIdx];
};