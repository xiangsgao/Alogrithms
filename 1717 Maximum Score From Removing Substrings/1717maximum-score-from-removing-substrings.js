/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let toRemove =  x > y ? "ab" : "ba";
    let curPoints = Math.max(x, y);
    let points = 0;

    let stack = [];
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(c === toRemove[1] && toRemove[0] === stack[stack.length - 1]){
            stack.pop();
            points += curPoints; 
        }else{
            stack.push(c);
        }
    }
    
    s = stack.join("")
    stack = [];
    toRemove = x > y ? "ba" : "ab";
    curPoints = Math.min(x, y);
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(c === toRemove[1] && toRemove[0] === stack[stack.length - 1]){
            stack.pop();
            points += curPoints; 
        }else{
            stack.push(c);
        }
    }


    return points;
};