/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let unbalance = 0;

    const stack = [];
    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        if(cur === "["){
            stack.push("[")
        }else{
            const top = stack.pop();
            if(top === undefined){
                unbalance++;
            }
        }
    }
    return Math.ceil(unbalance / 2);
};