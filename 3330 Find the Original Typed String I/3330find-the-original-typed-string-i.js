/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    
    let streak = 1;
    let res = 0;
    for(let i = 0; i < word.length; i++){
        const cur = word[i];
        
        if(word[i - 1] === cur){
            streak++;
        }else {
            res += (streak - 1);
            streak = 1;
        }
    }
    
    return res + streak;
};