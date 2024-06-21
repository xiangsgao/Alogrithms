/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    const que = [];
    let word = '';
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(c === ' '){
            if(word.length){
                que.unshift(word);
            }
            word = '';
            continue;
        }
        word += c;
    }

    if(word.length){
        que.unshift(word);
    }
    
    return que.join(' ');
};