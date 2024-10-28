/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length){
        return [];
    }

    intervals.sort(([a], [b]) => a - b)
    const res = [intervals[0]];

    for(let i = 1; i < intervals.length; i++){
        const [prevStart, preEnd] = res[res.length - 1];
        const [start, end] = intervals[i];

        if(start > preEnd){
            res.push(intervals[i]);
        }else{
            res[res.length - 1] = [
                prevStart,
                Math.max(preEnd, end)
            ];
        }
    }

    return res;
};