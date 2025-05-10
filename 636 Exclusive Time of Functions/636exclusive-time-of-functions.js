/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

 // couldnt solve becuase i have no idea how call stack works
// i still do not understand the solution.
// i suggest just memeorizing this.
var exclusiveTime = function(n, logs) {
    
    const executionTimes = Array(n).fill(0);
    const stack = [];

    let prevStartTime = 0;

    for(const log of logs){
        const [idStr, callType, timestampStr] = log.split(":");

        const id = Number(idStr);
        const timestamp = Number(timestampStr);

        if(callType === "start"){
            if(stack.length){
                executionTimes[stack.at(-1)] += timestamp - prevStartTime;
            }   
            stack.push(id);
            prevStartTime = timestamp;
        }else{
            executionTimes[stack.pop()] += timestamp - prevStartTime + 1;
            prevStartTime = timestamp + 1;
        }
    }

    return executionTimes;
};