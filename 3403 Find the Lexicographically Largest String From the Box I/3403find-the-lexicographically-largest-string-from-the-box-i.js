/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
 // note that longer string is always greater than shorter string. with this in mine, what is the maximum string that form if you split into numFriends? it is if all friends except one gets a single character string. with this in mine, get all the possible subsring of the maximum length and compare them all. this will get you the top output.
 // one edge case is bcdefa and friend = 2. the string fa is actually greater. this means need to keep checking as long as i < word.length

var answerString = function(word, numFriends) {
    
    if(numFriends === 1){
        return word;
    }

    const strLen = word.length - numFriends + 1;

    let res = "";
    for(let i = 0; i < word.length; i++){
        const substring = word.substring(i, i + strLen);
       
        if(res.localeCompare(substring) < 0){
            res = substring;
        }
    }

    return res;
};