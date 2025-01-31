/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
 // failed because i cant do high school math
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0){
        return "0"
    }

    let res = "";

    if(
        (numerator < 0 && denominator > 0) ||
        (numerator > 0 && denominator < 0)     
    ){
        res += "-";
    }

    const divisor = Math.abs(numerator);
    const dividend = Math.abs(denominator);

    let remainder = divisor % dividend;

    res += `${Math.floor(divisor / dividend)}`;

    if(remainder === 0){
        return res;
    }

    res += ".";

    const map = new Map();
    
    while(remainder !== 0){
       
        if(map.has(remainder)){
            res = res.split("");
            res.splice(map.get(remainder),0,`(`);
            res.push(")");
            res = res.join("");
            break;
        }
        map.set(remainder, res.length);
        remainder *= 10;
        
        res += `${Math.floor(remainder / dividend)}`;
         
        remainder %= dividend; 
    }

    return res;
};