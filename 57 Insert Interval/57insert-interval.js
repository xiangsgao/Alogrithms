/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
   
    const res = [];
    for(let i = 0; i < intervals.length; i++){
        const [start, end] = intervals[i];
         const [newStart, newEnd] = newInterval;
        if(newEnd < start){
            res.push(newInterval);
            return [...res, ...intervals.slice(i, intervals.length)];
        }else if(newStart > end){
            res.push(intervals[i]);
        }else{
            newInterval = [Math.min(newStart, start), Math.max(newEnd, end)];
        }
    }
    res.push(newInterval);
    return res;
    
};