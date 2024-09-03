/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const convertToDigit = (s) =>{
    const map = "abcdefghijklmnopqrstuvwxyz".split("").reduce((acc, e, index) =>{
        acc.set(e, index + 1);
        return acc;
    }, new Map());

    return s.split("").map(e => {
        return map.get(e).toString();
    }).join("").split("");
}

var getLucky = function(s, k) {
    let digitChars = convertToDigit(s);
    for(let i = 0; i < k; i++){
        digitChars = digitChars.reduce((acc, e) => acc + Number(e), 0);
        digitChars = digitChars.toString().split("");
    }
    return digitChars.join("")
     
};