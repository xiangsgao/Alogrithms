/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
 // cant solve because i cant simulate optimally, look at the code. simulate it O(26n) times
var lengthAfterTransformations = function(s, t) {


    const MOD = Math.pow(10, 9) + 7;    
    
    const ord = "abcdefghijklmnopqrstuvwxyz".split("").reduce((acc, e, i) => {
        acc[e] = i;
        return acc;
    }, {});

    const count = Array(26).fill(0);

    for(const c of s){
        const ordC = ord[c];
        count[ordC] += 1;
    }

    for(let i = 1; i <= t; i++){
        const freqz = count[25]; // number of the z chars

        // update the count of none a and none b, these two need to update seperately
        for(let j = 24; j>=1; j--){
            count[j + 1] = count[j];
        }

        // count of b
        count[1] = (freqz + count[0]) % MOD; // all prev z becomes b plus all prev a becomes b
        count[0] = freqz; // prev z becomes a
    }

    
    let answer = 0;
    for(const n of count){
        answer = (answer + n) % MOD;
    }

    return answer;
    
};