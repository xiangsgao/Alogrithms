/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

 /***
 
    couldnt solve 
    the idea is that all words in the words list is fixed size so we just need to check every nth character in string s in a double for loop.
    note that elements in words may have duplicates. resuylt substring must have excatly the same number of elements as well as the same elements.
    we can optimize this more using sliding window by remove the adding the seen words from the left and right
  */
var findSubstring = function(s, words) {
    
    const wordCnt = words.length;
    const wordLen = words[0].length;
    const N = s.length;

    const wordToFreq = new Map();

    for(const w of words){
        wordToFreq.set(w, (wordToFreq.get(w) ?? 0) + 1);
    }

    const result = [];

    for(let i = 0; i <= N - wordLen * wordCnt; i++){
        let wordsLeft = wordCnt;
        const seen = new Map();

        for(let j = i; wordsLeft != 0; j+= wordLen){
            const target = s.substring(j, j + wordLen);
            seen.set(target, (seen.get(target) ?? 0) + 1);
            if(!wordToFreq.has(target) || seen.get(target) > wordToFreq.get(target)){
                break;
            }

            wordsLeft--;
        }

        if(wordsLeft === 0){
            result.push(i);
        }
    }

    return result;

};