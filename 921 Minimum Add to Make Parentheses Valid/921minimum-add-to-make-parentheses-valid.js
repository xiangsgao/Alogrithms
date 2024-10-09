/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
   
    const stack = [];
    let notClosed = 0;
    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        if(cur === "("){
            stack.push("(")
        }else{
            if(stack.length){
                stack.pop();
            }else{
                notClosed++;
            }
            
        }
    }
    notClosed += stack.length;
    return notClosed;

};