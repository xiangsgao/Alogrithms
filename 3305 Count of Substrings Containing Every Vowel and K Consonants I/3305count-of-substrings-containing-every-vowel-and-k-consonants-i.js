/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */

const check = (str, k) =>{
    const vSet = new Set("aeiou".split(""));
    const vCount = new Set();
    let cCount = 0;
    for(const c of str){
        if(vSet.has(c)){
            vCount.add(c);
        }else{
            cCount++;
        }
    }
    return cCount === k && vCount.size === 5;
}

var countOfSubstrings = function(word, k) {
    let retval = 0;
    const visited = new Set();
    const backtrack = (left = 0, right = word.length) =>{
        const key = `${left},${right}`;
        if(visited.has(key)){
            return;
        }

        if(right - left < k + 5){
            return;
        }

        visited.add(key);
        const subString = word.substring(left, right);

        if(check(subString, k)){
            retval+= 1;
        }

        backtrack(left + 1, right);
        backtrack(left, right - 1);
        
    }
    backtrack();
    return retval;
};