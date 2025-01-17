/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    const first = 0;
    let last = 0;

    // if cur element is 1, the the original cur must be different than the last 
    // if cur element is 0, then the original cur must be the same as the last
    for(const n of derived){
        if(n){
            last = last ? 0 : 1;
        }
    }

    return first === last;
};