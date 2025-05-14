/**
 * @param {string} s
 * @return {number}
 */
// was able to solve this after  countless debugging the failed test cases.
// the idea is to use a loop for just the parentheis and a second helper function for parsing everything that are none parenthesis
var calculate = function(s) {

        const getOpRes = (num1, num2, op) =>{
            switch(op){
                case "+":{
                    return num1 + num2;
                }
                case "-":{
                    return num1 - num2;
                }
                case "*":{
                    return num1 * num2;
                }
                case "/":{
                    let res = num1/num2;
                    if(res < 0){
                        res = Math.ceil(res);
                    }else{
                        res = Math.floor(res);
                    }
                    return res;
                }
            }
        }

        // handles everything except parathesis
        const helper = (curStack) =>{
            
            
            let curSum = curStack.shift();
            
            while(curStack.length){
                const [op, nextNum, nextOp, nextNextNum] = curStack;
                curStack.shift();
                if(nextOp === "*" || nextOp === "/" && (op !== "/" && op !== "*")){
                    curStack.shift();
                    curStack.shift();
                    curStack.shift();
                    curSum = getOpRes(curSum, getOpRes(nextNum, nextNextNum, nextOp), op);
                }else{
                    curStack.shift();
                    curSum = getOpRes(curSum, nextNum, op);
                }
               
            }
            return curSum;
        }

        // console.log({test: helper( [
        //     2, '*', 15, '/',
        //     3, '+', 11
        // ])})

        // return 0;

        const numbers = new Set("1234567890".split(""));
        const stack = [];
        let i = 0;
        let cur = "";
        const op = new Set("+-/*".split(""));
        while(i < s.length){
            const e = s[i++];
            if(numbers.has(e)){
                cur += e;
                continue;
            }
            
            if(cur){
                stack.push(Number(cur));
                cur = "";
            }
           

            if(e === ")"){
                const toEval = [];
                while(stack.at(-1) !== "("){
                   toEval.unshift(stack.pop());
                }              
                stack.pop();
                const res = helper(toEval);
                stack.push(res);
            }else{
                 stack.push(e);
            }
        }

        if(cur){
            stack.push(Number(cur));
        }


        const retval = helper(stack);
        return retval; 

};