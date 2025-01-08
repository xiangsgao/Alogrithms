/**
 * @param {string[]} words
 * @return {number}
 */

const isValid = (str1, str2) =>{
    if(str2.length < str1.length){
        return false;
    }

    return str2.startsWith(str1) && 
                str2.endsWith(str1);
                
}

var countPrefixSuffixPairs = function(words) {
     let res = 0;
     for(let i = 0; i < words.length - 1; i++){
        for(let j = i + 1; j < words.length; j++){
            if(isValid(words[i], words[j])){
                console.log({test: words[i], test2: words[j]})
                res++;
            }
        }
     }

     return res;
};