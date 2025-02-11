/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    
    const stack = [];
   
    
    for(let i = 0; i < s.length + 1; i++){
        
        const lastThree = stack.slice(stack.length - part.length, stack.length).join("");
        if(lastThree === part){
            for(let j = 0; j < lastThree.length; j++){
                stack.pop();
            }
        }

        
        const cur = s[i];
        if(cur !== undefined){
            stack.push(cur);
        }
        
    }

    return stack.join("");
};