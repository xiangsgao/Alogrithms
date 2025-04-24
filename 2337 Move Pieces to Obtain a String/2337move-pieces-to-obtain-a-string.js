/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    if(start.replaceAll("_", "") !== target.replaceAll("_", "")){
        return false;
    }
    let tLeft = 0;
    let sLeft = 0;
    while(tLeft < target.length && sLeft < start.length){
        const tCur = target[tLeft];
        const sCur = start[sLeft];
        if(tCur === "_"){
            tLeft++;
        }else if(sCur === "_"){
            sLeft++;
        }else if(tCur !== sCur){
            return false;
        }else if(tLeft < sLeft && sCur !== "L"){
            return false;
        }else if(tLeft > sLeft && sCur !== "R"){
            return false;
        }else{
            // this means two characters can be swap
            tLeft++;
            sLeft++;
        }
    }

    return true;

};