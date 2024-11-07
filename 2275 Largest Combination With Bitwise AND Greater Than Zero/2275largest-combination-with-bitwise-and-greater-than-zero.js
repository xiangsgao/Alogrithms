/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
   const arr = Array(32).fill(0);

    let power = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        const digit = Math.pow(2, power);
        for(const n of candidates){
            if(n & digit){
                arr[i] += 1;
            }
        }
        power += 1;
    }

    return Math.max(...arr);
};