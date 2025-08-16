/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const str = num.toString().split("");

    for(let i = 0; i < str.length; i++){
        if(str[i] !== "9"){
            str[i] = "9";
            break;
        }
    }

    return parseInt(str.join(""));

};