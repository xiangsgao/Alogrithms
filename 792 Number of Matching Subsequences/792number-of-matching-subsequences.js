/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 // cant solve because cant think of a solution of putting he words into a bucket defined by its next character to check
var numMatchingSubseq = function(s, words) {
    let ans = 0;

    const heads = Array(26).fill().map(() => []);
    
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        const idx = word.charCodeAt(0) - 'a'.charCodeAt(0);
        const list = heads[idx];
        list.push({word, index: 0});
    }


    for(const c of s){
        const idx = c.charCodeAt(0) - "a".charCodeAt(0);
        const old = heads[idx];
        heads[idx] = []; 

        for(const node of old){
            node.index += 1;
            if(node.index === node.word.length){
                ans += 1;
            }else{
                heads[node.word.charCodeAt(node.index) - "a".charCodeAt(0)].push(node)
            }
        }
    }

    return ans;

};