/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
const stack = [];


    for(const c of s){
        if(c === "*" || c === "("){
            stack.push(c);
        }

        if(c === ")"){
            if(!stack.length){
                return false;
            } 
            const toAddBack = [];
            while(stack.length && stack[stack.length -1] === "*"){
                toAddBack.unshift(stack.pop());
            }

            if(!stack.length){
                toAddBack.pop();
            }else{
                stack.pop();
            }

            for(const e of toAddBack){
                stack.push(e);
            }

        }
    }

    const stack2 = [];
    for(const e of stack){
        if(e === "("){
            stack2.push("(")
        }else{
            if(stack2.length){
                stack2.pop();
            }
        }
    }

    return stack2.length === 0;
};