/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const words = sentence.split(" ");
    let idx = 0;
    while(true){
        const curWord = words[idx];
        const lastCurC = curWord[curWord.length - 1];
        if(idx === words.length - 1){
            const nextWord = words[0];
            const nextWordC = nextWord[0];
            return lastCurC === nextWordC;
        }

        const nextword = words[idx + 1];
        const nextWordC = nextword[0];
        if(lastCurC !== nextWordC){
          
            return false;
        }
        idx++;
    }
};