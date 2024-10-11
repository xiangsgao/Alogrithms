/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function(word1, word2) {
    const map = new Map();

    for(const c of word2){
        map.set(c, (map.get(c) ?? 0) + 1);
    }


    const cur = new Map();

    let left = 0;
    let right = 0;
    let allMet = 0;
    let count = 0;
    while(right < word1.length){
 
        const c = word1[right];
        cur.set(c, (cur.get(c) ?? 0) + 1);
        if(map.has(c) && map.get(c) === cur.get(c)){
            allMet++;
        }

        while(allMet === map.size){
            const dC = word1[left];
            cur.set(dC, cur.get(dC) - 1);
            if(cur.get(dC) === (map.get(dC) - 1)){
                allMet--;
            }
            left++;
        }
        
        if(left > 0){
            count += left;
        }

        right++;
    }

    return count;

};