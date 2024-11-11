/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
        /**
            stack = [];
            retval = [];
            recursive function
            1. create a stack
            2. recrusive fn
            3. in each recursion, two decisions, append closing or append opening
            4. check that it wont be unblanace before making decisions
            5. return all the permutations
                // ())()()()()()
         */

        const stack = [];
        const retval = [];
        const MAX_CHARS = 2 * n;
        const recursive = (pairs = 0, str = "") =>{
            if(str.length >= MAX_CHARS){
                if(pairs === n){
                    retval.push(str);
                }
                return;
            }

            // either appending an closing
            if(stack.length){ // stack has at least one opening
                stack.pop(); 
                recursive(pairs + 1, str + ")");
                stack.push("(");
            }

            // append opening

            stack.push("(");
            recursive(pairs, str + "(");
            stack.pop();

        }

        recursive();
            // 2^n 
        return retval;
};