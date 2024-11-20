/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    let  negative = x < 0;
    let sum = 0;
    x = Math.abs(x);
    while(x !== 0){
        const digit = x % 10;
        sum = sum * 10 + digit;
        x = Math.floor(x / 10);
        
    }
 
    if(sum > MAX || sum < MIN){      
        return 0;
    }

    if(negative){
        sum *= -1;
    }



    return sum;
};