const getPrior = (op) =>{
    if("+-".includes(op)){
        return 1;
    }

    if("/*".includes(op)){
        return 2;
    }
}


const evaluate = (x, y, op) =>{
    const num1 = Number(x);
    const num2 = Number(y);
    if(op === "+"){
        return num1 + num2;
    }

    if(op === "-"){
        return num1 - num2;
    }

    if(op === "/"){
        return Math.floor(num1 / num2);
    }

    if(op === "*"){
        return num1 * num2;
    }
}


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const numChars = "0987654321";
    const ops = "+-*/";
    const stack = [];
    const opStack = [];

    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        if(cur === " "){
            continue;
        }

        if(numChars.includes(cur)){
            let last = stack.pop() ?? "";
            last += cur;
            stack.push(last);
        }
        
        if(cur === "("){
            opStack.push(cur);
            stack.push("");
        }

        if(cur === ")"){
            while(opStack.length && opStack[opStack.length - 1] !== "("){
                const num2 = stack.pop();
                const num1 = stack.pop();
                const op = opStack.pop();
                stack.push(evaluate(num1, num2, op));
            }
            opStack.pop(); // pop the "("
        }

        if(ops.includes(cur)){
            while(opStack.length && getPrior(cur) <= getPrior(opStack[opStack.length - 1])){
                const num2 = stack.pop();
                const num1 = stack.pop();
                const op = opStack.pop();
                stack.push(evaluate(num1, num2, op));
            }
           stack.push("")
           opStack.push(cur);
        }
    }   

    while(opStack.length){
        const num2 = stack.pop();
        const num1 = stack.pop();
        const op = opStack.pop();
        stack.push(evaluate(num1, num2, op));
    }

    return stack.pop();

};