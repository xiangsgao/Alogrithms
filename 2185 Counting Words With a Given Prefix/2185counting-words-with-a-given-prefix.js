/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    
    const root = {};

    const addWord = (w) =>{
        let cur = root;

        for(const c of w){
            const next = cur[c] ?? { count: 0 };
            next.count += 1;
            cur[c] = next;
            cur = next;
        }
        cur.done = true;
    }

    const countWord = (pre) =>{
        let cur = root;
        for(const c of pre){
        
            if(cur[c] === undefined){
                   
                return 0;
            }
            cur = cur[c];
        }
        return cur.count;
    }

    for(const w of words){
        addWord(w);
    }

   
    return countWord(pref);

};