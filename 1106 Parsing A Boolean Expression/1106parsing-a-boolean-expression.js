/**
 * @param {string} expression
 * @return {boolean}
 */

const evalute = (op, vars) =>{
    let cur = vars.shift() === "t";

    while(vars.length){
        const nextVar = vars.shift() === "t";
        switch(op){
            case "|" : 
                cur = cur || nextVar; 
                break;
            case "&":
                cur = cur && nextVar;
                break;
            default:
                 throw new Error("what the fck? Leetcode is dumb");
        }
    }



    let res = cur ? "t" : "f";
    if(op === "!"){
        res = res === "t" ? "f" : "t";
    }

    return res;
   
}


var parseBoolExpr = function(expression) {
    
    const stack = [];

    for(const c of expression){
        if(c === ")"){ 
            // get the op
            const variables = [];
            while(stack[stack.length -1] !== "("){
                variables.push(stack.pop());
            }
            stack.pop();
            const op = stack.pop();
            const result = evalute(op, variables);
            stack.push(result);
        }else if(c === ","){
            continue;
        }else{
            stack.push(c);
        }
    }

    return stack.pop() === "t";

};