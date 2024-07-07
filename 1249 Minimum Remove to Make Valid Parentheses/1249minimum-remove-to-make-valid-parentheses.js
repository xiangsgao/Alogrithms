/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    const stack = [];
    const stack2 = [];
    for(let i = 0; i < s.length; i++){
        const cur = s[i];
    
        if(cur === "("){
            stack.push(i)
        }else if(cur === ")"){
            if(stack.length){
                stack.pop();
            }else{
                stack2.push(i);
            }
        }
    }

    let retval = "";
    const set1 = new Set(stack);
    const set2 = new Set(stack2);
    for(let i = 0; i < s.length; i++){
        if(set1.has(i) || set2.has(i)){
            continue;
        }

        retval += s[i];
    }
    
    return retval;

};