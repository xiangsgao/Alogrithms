/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function(s, k) {
    const map = new Map();


    let left = 0;
    let numCharsMoreThanTwo = 0;
    let res = 0;
    for(let right = 0; right < s.length; right++){
        const cur = s[right];

        map.set(cur, (map.get(cur) ?? 0) + 1);

        if(map.get(cur) === k){
            numCharsMoreThanTwo++;
        }

        while(numCharsMoreThanTwo){
            const charLeft = s[left];
            if(map.get(charLeft) === k){
                numCharsMoreThanTwo--;
            }
            map.set(charLeft, map.get(charLeft) - 1);
            left++;
        }
        
        res += left;
    }

    return res;
};