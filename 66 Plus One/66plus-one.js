/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
        let carry = 1;
        for(let i = digits.length - 1; i >= 0; i--){
            if(!carry){
                break;
            }

            digits[i] += 1;
            if(digits[i] === 10){
                digits[i] = 0;
                carry = 1;
            }else{
                carry = 0;
            }
        }

        if(carry){
            digits.unshift(1);
        }

        return digits;
};