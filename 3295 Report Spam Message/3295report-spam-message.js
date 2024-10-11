/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    const bannedSet = new Set(bannedWords);
    let count = 0;
    for(const word of message){
        if(bannedSet.has(word)){
            count += 1;
        }
        if(count === 2){
            return true;
        }
    }

    return false;
};