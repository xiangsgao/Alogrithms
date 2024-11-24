/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const convert = "0123456789".split("").reduce((acc, e, i) =>{
        acc[e] = i;
        return acc;
    }, {});

    const add = (num1, num2) =>{
        let min = num1.length < num2.length ? num1 : num2;
        const max = num1.length < num2.length ? num2 : num1;
        const dif = Math.abs(num1.length - num2.length)
        if( dif > 0){
            min = "0".repeat(dif) + min; 
        }
        let carry = 0;
        let str = "";
        for(let i = min.length - 1; i >= 0; i--){
            const digit1 = convert[max[i]];
            const digit2 = convert[min[i]];
            let sum = digit1 + digit2 + carry;
            carry = 0;
            if(sum >= 10){
                sum -= 10;
                carry = 1;
            }
            str = sum.toString() + str;
        }
        if(carry){
            str = "1" + str;
        }

        if("0".repeat(str.length) === str){
            return "0";
        }
        return str;
    }

    
    let res = "0";
    const min = Math.min(num1.length, num2.length);
    const max = Math.max(num1.length, num2.length);
    const maxN = num1.length > num2.length ? num1 : num2; 
    const minN = num1.length > num2.length ? num2 : num1; 
    let oz = 0;
    for(let i = min - 1; i >= 0; i--){
        let zeroes = oz;
        for(let j = max - 1; j >= 0; j--){
            const digit1 = convert[minN[i]];
            const digit2 = convert[maxN[j]];
            let product = (digit1 * digit2).toString();
            product += "0".repeat(zeroes);
            res = add(res, product);
            zeroes += 1;
        }
       oz += 1;
    }
    return res;

};