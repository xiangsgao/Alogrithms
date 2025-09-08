/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i = n - 1; i >= 1; i--){
        const complmenent = n - i;
        if(!i.toString().includes('0') && !complmenent.toString().includes('0')){
            return [complmenent, i];
        }
    }
};