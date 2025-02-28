/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
     
    if(n === 2){
        return 1;
    }

    if(n===3){
        return 2;
    }

     let curSum = n;
     let product = 1;
     while(curSum > 4){
        product *= 3;
        
        curSum -= 3;
     }
     
    product *= curSum;

    return product;


};