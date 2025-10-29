/**
 * @param {number} n
 * @return {number}
 */
 // more efficinet way is to convert n to binary and then move from right to left and flip all 0 into 1
var smallestNumber = function(n) {
    for(let i = n ;; i++){
        const bits = i.toString(2).split("");
        while(bits.length && bits[0] === "0"){
            bits.shift();
        }
        const noDup = [...(new Set(bits))];
        if(noDup.length === 1 && noDup.shift() === "1"){
            return i;
        }
    }
};