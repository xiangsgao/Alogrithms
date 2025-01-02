/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = new Set("aeiou".split(""));
    const prefix = [];
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        let cnt = prefix[i - 1] ?? 0;
        if(vowels.has(word[0]) && vowels.has(word[word.length - 1])){
            cnt += 1;
        }
        prefix[i] = cnt;
    }

    const res = [];
    for(const [from, to] of queries){
        const total = prefix[to];
        const subtract = prefix[from - 1] ?? 0;
        res.push(total - subtract);
    }

    return res;
};