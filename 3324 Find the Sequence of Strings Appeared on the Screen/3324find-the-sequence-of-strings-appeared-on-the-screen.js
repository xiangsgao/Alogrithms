/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
    const retval = ["a"];
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const map = new Map();
    for(let i = 0; i < chars.length; i++){
        map.set(chars[i], chars[i + 1] ?? "a");
    }

    const recursion = (i = 0) =>{
        const last = retval[retval.length - 1];
        const lastChar = last[last.length - 1];
        const lastNext = map.get(lastChar);

        if(last === target){
            return;
        }

        let nextAppend = '';
        if(lastChar === target[i]){
            retval.push(last + "a");
            recursion(i + 1);
        }else{
            retval.push(last.slice(0, last.length - 1) + lastNext);
            recursion(i);
        }
    }
    recursion();
    return retval;
};