/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
 // coudnt solve because i misread the question
var minExtraChar = function(s, dictionary) {
    
    const word = new Set(dictionary);
    const map = new Map();
    const dfs = (i) =>{

        if(i === s.length){
            return 0;
        }

        if(map.has(i)){
            return map.get(i);
        }

        let res = 1 + dfs(i + 1); // skip cur character

        for(let j = i; j < s.length; j++){
            const str = s.substring(i, j + 1);
            if(word.has(str)){
                res = Math.min(dfs(j + 1), res);
            }
        }
        map.set(i, res);
        return res;
    }

    return dfs(0);

};