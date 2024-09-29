/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    const map = {};
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < letters.length; i++){
        map[letters[i]] = letters[i + 1] ?? letters[0];
    }

    let s = "abbcbccd".split("");
    while(s.length < k){
        const nextStr = s.map(e => map[e]);
        s = [...s, ...nextStr];

    }

    return s[k -1];

};