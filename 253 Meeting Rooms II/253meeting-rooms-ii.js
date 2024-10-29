/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const start = intervals.sort(([a], [b]) =>  a - b).map(([e]) => e);
    const end = intervals.sort(([_, a], [__, b]) =>  a - b).map(([_, e]) => e);
    let i = 0;
    let j = 0;
    let cur = 1;
    let res = 1;
    while(i < start.length){
        const startE = start[i];
        const endE = end[j];

        if(startE < endE){
            i++;
            cur++;
            res = Math.max(res, cur);
        }else{
            j++;
            cur--;
        }
    }

    return --res;
};