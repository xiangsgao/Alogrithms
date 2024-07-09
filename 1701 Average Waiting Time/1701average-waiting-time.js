/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let lastEnd = 0;
    let avg = 0;
    for(let i = 0; i < customers.length; i++){
        const [start, dur] = customers[i];
        let adjustedStart = start
        if(lastEnd > adjustedStart){
            adjustedStart = lastEnd;
        }
        
        const endTime = adjustedStart + dur;
        const waitingTime = endTime - start;
        avg += waitingTime;
        lastEnd = endTime;
    }

    return avg / customers.length;
};