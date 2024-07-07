/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drank = numBottles;
    let empty = numBottles;
    while(empty >= numExchange){
        const newExchanged = Math.trunc(empty/numExchange);
        empty = empty % numExchange;
        drank += newExchanged;
        empty += newExchanged;
    }

    return drank;
};