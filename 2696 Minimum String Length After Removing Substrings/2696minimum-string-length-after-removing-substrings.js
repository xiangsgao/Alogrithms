/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let test = s;
    while(true){
        const count = test.length;
        test = test.replaceAll("AB", "");
        test = test.replaceAll("CD", "");
        if(test.length === count){
            return count;
        }
    }
};