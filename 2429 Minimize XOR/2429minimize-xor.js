/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    
   let num1Str = num1.toString(2);
   let num2Str = num2.toString(2);

    if(num1Str.length < num2Str.length){
        num1Str = "0".repeat(num2Str.length - num1Str.length) + num1Str; 
    }

    let bits = num2Str.split("").reduce((acc, e) => acc + (e === "0" ? 0 : 1), 0);

    let res = Array(num1Str.length).fill("0"); 
    for(let i = 0; i < res.length; i++){
        if(bits && num1Str[i] === "1"){
            res[i] = "1";
            bits -= 1;
        }
    }


    for(let i = res.length - 1; bits; i--){
        if(res[i] === "0"){
            res[i] = "1";
            bits--;
        }
    }

    return parseInt(res.join(""), 2);
    

};