/**
 * @param {string[]} words
 * @return {number}
 */

 // not all the words are two in length
 // so ab needs a ba, use map to count, if it exists then increment res length by 4
 // edge case would be if a word has all the same characters like aa. we just need to add this after the loop because we can add one more word.

var longestPalindrome = function(words) {
    const map = new Map();
    let res = 0;
    for(let i = 0; i < words.length; i++){
        const cur = words[i];
        const reverse = cur.split("").reverse().join("");
        if(map.has(reverse)){
            map.set(reverse, map.get(reverse) - 1);
            res+= 4;
            if(map.get(reverse) === 0){
                map.delete(reverse);
            }
        }else{
            map.set(cur, (map.get(cur) ?? 0) + 1);
        }
    }

    for(const key of map.keys()){
        if(key[0] === key[1]){
            res +=2;
            break;
        }
    }


    return res;
};