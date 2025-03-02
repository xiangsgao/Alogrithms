/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

    const map = new Map();
    const recursion = (one = 0, two = 0) =>{
        const key = `${one},${two}`;
        if(one >= text1.length){
            return 0;
        }

        if(two >= text2.length){
            return 0;
        }

        if(map.has(key)){
            return map.get(key);
        }

        const cur1 = text1[one];
        const cur2 = text2[two];

        if(cur1 === cur2){
            map.set(key, 1 + recursion(one + 1, two + 1));
            return map.get(key);
        }

        const advanceOne = recursion(one + 1, two);
        const advanceTwo = recursion(one, two + 1);
        map.set(key, Math.max(advanceOne, advanceTwo));
        return map.get(key);
    }

    return recursion();
};