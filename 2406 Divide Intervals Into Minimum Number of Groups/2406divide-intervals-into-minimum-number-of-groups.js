/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    let start = [];
    let end = [];

    for(const [startE, endE] of intervals){
        start.push(startE);
        end.push(endE);
    }

    start = start.sort((a, b) => a - b);
    end = end.sort((a,b) => a - b);
    
    let i = 0;
    let j = 0;
    let group = 0;
    let res = 0;
    while(i < intervals.length){
        if(start[i] <= end[j]){
            i++;
            group += 1;
            res = Math.max(res, group);
        }else{
            j++;
            group--;
        }
    }



    return res;
};