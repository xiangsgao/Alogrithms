/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {

    intervals.sort(([a], [b]) => a-b)
    for(let i = 1; i < intervals.length; i++){
        const [start,end] = intervals[i];
        const [pS, pE] = intervals[i - 1];
        if(start < pE){
            return false;
        }
    }

    return true;
};