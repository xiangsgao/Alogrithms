/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 // stupid math problem
 // n1 - ((2^i1 + n2) + (2^i2 + n2) .... ) = 0
// using algebra, this becomes n1 - k * n2 = 2^i1 + 2^i2...
// next just need to check the bits to figoure out if this this many operations leads to 0
var makeTheIntegerZero = function(num1, num2) {
    for(let i = 1; i < 33; i++){
        // i stands for the number of operations
        const cur = num1 - i * num2;
        if(i >= cur.toString(2).split("").reduce((acc, e) => acc + (e === '1' ? 1 : 0) , 0)
            && cur >= i        
        ){
            return i;
        }
    }

    return -1;
};