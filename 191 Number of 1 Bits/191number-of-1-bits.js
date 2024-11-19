/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let bits = 0;
    while(n){
        const b = n & 1;
        if(b){
            bits++;
        }
        n = n >> 1;
    }

    return bits;
};