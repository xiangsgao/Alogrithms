/**
 * @param {string} s
 * @return {number}
 */
const num = new Set("0123456789".split(""));
const sign= new Set("-+*".split(""));

// handle one parathesis
const eval = (stack) =>{
    
    let res = stack.pop();
    while(stack.length && stack[stack.length - 1] !== "("){
        const num = stack.pop();
        res += num;
    }
    stack.pop();
    // check for negation
    if(stack[stack.length - 1] === "-"){
        res *= -1;
        stack.pop();
    }else if(stack[stack.length - 1] === "+"){
        stack.pop();
    }

    return res;
}

var calculate = function(s) {
    const stack = [];

    let i = 0;
    while(i < s.length){
        const cur = s[i];

        if(cur === ")"){
            // handle close parathensis
          
            const res = eval(stack);
            stack.push(res);
        }else if(cur === "("){
            // handling opening parathensis
            stack.push("(")
        }else if(sign.has(cur)){
            // handle the sign
            stack.push(cur);
        }else if(num.has(cur)){
            // handle num
            let numStr = "";
            if(sign.has(stack[stack.length - 1])){
                numStr += stack.pop();
            }
            numStr += cur;
            let j = i + 1;
            while(num.has(s[j])){
                numStr += s[j];
                j++;
            }
            stack.push(Number(numStr));
            i = j - 1;
        }

        i++;
    }

     const finalRes = eval(stack);

     return finalRes;
};