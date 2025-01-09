/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {

    const trie = {};

    const getCount = (str) =>{
        let cur = trie;
        let start = 0;
        let end = str.length - 1;
        while(start < str.length){
            const pre = str[start];
            const suf = str[end];
            const key = `${pre},${suf}`;
            const next = cur[key];
            if(!next) return 0;
            cur = next;
            start++;
            end--;
        }

        return cur.count;
    }

    const addWord = (str) =>{
        let cur = trie;
        let start = 0;
        let end = str.length - 1;
        while(start < str.length){
            const pre = str[start];
            const suf = str[end];
            const key = `${pre},${suf}`;
            const next = cur[key] ?? { count: 0 };
            next.count += 1;
            cur[key] = next;
            cur = next;
            start++;
            end--;
        }

        return cur;
    }

    let res = 0;
    for(const w of words.reverse()){
        const test = getCount(w);

        res += test;
        addWord(w);
    }

    return res;

};