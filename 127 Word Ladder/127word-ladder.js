/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

 // coundt solve because not realizing i can convert word into patterns with one wild card standing for any pattern with one character difference 
 // also not realizing that bfs is the best for this
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)){
        return 0;
    }

     const map = new Map();
     wordList.push(beginWord);
     for(const word of wordList){
        for(let j = 0; j < word.length; j++){
            const pattern = word.substring(0, j) + "*" + word.substring(j + 1, word.length);
            const nei = map.get(pattern) ?? [];
            nei.push(word);
            map.set(pattern, nei);
        }
     }

     const visited = new Set([beginWord]);
     const stack = [beginWord];
     let res = 1;
     while(stack.length){

        // handle all nodes at the current level
        const len = stack.length; 
        for(let i = 0; i < len; i++){
            const cur = stack.shift();
            if(cur === endWord){
                return res;
            }

            // get all the patterns of this current word
            for(let j = 0; j < cur.length; j++){
                const pattern = cur.substring(0, j) + "*" + cur.substring(j + 1, cur.length);

                // get all the neighbors that match this pattern
                for(const n of map.get(pattern)){
                    if(!visited.has(n)){ // make sure to not visit the same word more than once
                        visited.add(n);
                        stack.push(n);
                    }
                }
            }
        }

        res += 1;
     }

    return 0;
};