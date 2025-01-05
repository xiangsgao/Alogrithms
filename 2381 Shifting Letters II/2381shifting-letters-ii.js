/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    
    const alphbets = "abcdefghijklmnopqrstuvwxyz";

    const lookup = alphbets.split("").reduce((acc, e, i) =>{
        acc.set(e, i);
        return acc;
    } , new Map());

    const prefix = Array(s.length + 1).fill(0);

    for(const [left, right, d] of shifts){
        prefix[right + 1] += d ? 1 : -1;
        prefix[left] += d ? -1 : 1;
    }

    const res = s.split("").map((e) =>{
        return lookup.get(e);
    });

     

    let dif = 0;
    for(let i = prefix.length -1; i > 0; i--){
        dif += prefix[i];
        res[i - 1] = (dif + res[i - 1]) % 26;
        if(res[i - 1] < 0){
            res[i - 1] += 26;
        }
    }

    return res.map((e) => alphbets[e]).join("");

};