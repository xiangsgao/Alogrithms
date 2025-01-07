/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter((e) =>{
        const hasMatch = words.some(x => e !== x && x.includes(e));
        return hasMatch;
    });
};