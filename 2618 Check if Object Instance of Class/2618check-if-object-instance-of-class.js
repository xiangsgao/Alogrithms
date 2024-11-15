/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined || typeof classFunction !== "function"){
        return false;
    }

    let curProto = Object.getPrototypeOf(obj);

    while(curProto !== null){
        if(curProto === classFunction.prototype){
            return true;
        }
        curProto =  Object.getPrototypeOf(curProto);
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */