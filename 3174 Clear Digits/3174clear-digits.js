/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const numbers = new Set("0123456789".split(""));
    const stack = [];
    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        if(numbers.has(cur)){
            stack.pop();
        }else{
            stack.push(cur);
        }
    }

    return stack.join("");
};