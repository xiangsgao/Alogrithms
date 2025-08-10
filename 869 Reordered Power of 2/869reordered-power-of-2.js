/**
 * @param {number} n
 * @return {boolean}
 */
 // need to figoure out possible permutations
 // but you dont acutally have to if you can the digits
var reorderedPowerOf2 = function(n) {
    let cnt = 1;
    const set = new Set();
    for(let i = 0; i < 32; i++){
        set.add(cnt.toString().split("").sort((a, b) => a - b).join(""));
        cnt*=2;
    }

   
    const nString = n.toString().split("").sort((a, b) => a - b).join("");
    return set.has(nString);

};