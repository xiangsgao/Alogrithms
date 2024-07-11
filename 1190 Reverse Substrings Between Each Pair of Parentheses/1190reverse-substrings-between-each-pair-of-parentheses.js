/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = [];

    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        if(cur === ")"){
            let rev = [];
            while(stack.length && stack[stack.length - 1] !== "("){
                rev.push(stack.pop());
            }
            stack.pop();
            while(rev.length){
                stack.push(rev.shift());
            }
        }else{
            stack.push(cur);
        }
    }

    return stack.join("");
};