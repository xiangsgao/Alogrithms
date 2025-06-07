/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    
    const que = new PriorityQueue(([a, idx1], [b, idx2]) => {
        const lex = a.localeCompare(b);
        if(lex === 0){
            return idx2 - idx1;
        }

        return lex;
    });
    for(let i = 0 ; i < s.length; i++){
        const cur = s[i];
        if(cur !== "*"){
            que.enqueue([cur, i]);
        }else{
            que.dequeue();
        }
    }

    let arr = que.toArray();
    arr = arr.sort().sort(([_, idx1], [__, idx2]) => idx1 - idx2);
    arr = arr.map(([e]) => e);
    return arr.join("");
};