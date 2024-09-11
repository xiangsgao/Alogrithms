/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    const startB = Number(start).toString(2).split("").reverse();
    const goalB = Number(goal).toString(2).split("").reverse();
    const maxChars = Math.max(startB.length, goalB.length);
    let dif = 0;
    
    for(let i = 0; i < maxChars; i++){
        const startBit = startB[i] ?? "0";
        const goalBit = goalB[i] ?? "0";
        if(startBit !== goalBit){
            dif++;
        }
    }

    return dif;
};