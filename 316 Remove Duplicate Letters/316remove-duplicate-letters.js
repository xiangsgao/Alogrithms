/**
 * @param {string} s
 * @return {string}
 */

 // failed to realize we need to check if there are more characters to the right before we can pop from the stack
 // also failed to realize if characters already exist on the stack, we dont need to push onto the stack because stack is already in increasing order, same thing for poping
var removeDuplicateLetters = function(s) {
    const count = new Map();

    for(const c of s){
        count.set(c, (count.get(c)  ?? 0) + 1)
    }

    const stack = [];
    const visited = new Set();
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        
        while(!visited.has(c) && stack.length && stack[stack.length - 1].localeCompare(c) >= 1 && count.get(stack[stack.length - 1]) > 0 && stack[stack.length - 1]){
            const e = stack.pop();
            visited.delete(e);
        } 

        if(!visited.has(c)){
            visited.add(c);
            stack.push(c);
        }
        count.set(c, count.get(c) - 1);
    }

    return stack.join("");
};