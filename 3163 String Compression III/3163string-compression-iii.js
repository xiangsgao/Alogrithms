/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    
    let str = "";
    let i = 0;
    while(i < word.length){
        let count = 1;
        const cur = word[i];
        i++;
        while(word[i] === cur && count < 9){
            count+=1;
            i++;
        }

        str+= `${count}${cur}`;
    }

    return str;
};