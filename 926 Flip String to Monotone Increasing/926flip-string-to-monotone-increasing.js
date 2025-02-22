/**
 * @param {string} s
 * @return {number}
 */
 // cant solve and i cant even come up with a brute force which is embrassing
var minFlipsMonoIncr = function(s) {
    let res = 0;
    let countOne = 0;

    for(const c of s){
        if(c === "1"){
            countOne += 1;
        }else{
            res = Math.min(res + 1, countOne); // number of flips needed to make string monotonically increasing. countOne means number of pervious ones needed to be flip to 0 since current num is also a 0. res + 1 means we flip the current 0 to 1 instead and res is all the previous flips. this is super confusing to understand.
        }
    }

    return res;
};