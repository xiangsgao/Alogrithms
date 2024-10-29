/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals = intervals.sort(([a], [b]) => a - b);
    let i = 1;
    let prev = intervals[0][1];
    let res = 0;

    while(i < intervals.length){
        const [start, end] = intervals[i];
        if(start >= prev){
             prev = end;
        }else{
            res += 1;
            prev = Math.min(end, prev);
        }
       i++;
    }

    return res;
};