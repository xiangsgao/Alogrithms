/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let res = ""
    const set = new Set(spaces);
    let i = 0;
    while(i < s.length){
        const c = s[i];
        if(set.has(i)){
            set.delete(i);
            res += " " + c;
        }else{
            res += c;
        }
        i++;
    }

    return res;
};