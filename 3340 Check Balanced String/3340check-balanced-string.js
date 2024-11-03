/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    const digit = num.split("").map(e => Number(e));

    let odd = 0;
    let even = 0;
    for(let i = 0; i < digit.length; i++){
        if(i % 2 === 0){
            even += digit[i];
        }else{
            odd += digit[i];
        }
    }

    return odd === even;
    
};