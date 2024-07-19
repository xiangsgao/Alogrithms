/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const charArr = n.toString().split("");

    let retval = 0;
    let sign = 1;

    for(const c of charArr){
        const num = Number(c) * sign;
        retval += num;
        sign *= -1;
    }

    return retval;

};