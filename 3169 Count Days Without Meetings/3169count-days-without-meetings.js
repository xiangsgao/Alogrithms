/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    

    let res = 0;
    let end =   0;

    meetings = meetings.sort(([a], [b]) => a - b);

    for(let i = 0; i < meetings.length; i++){
        const [curStart, curEnd] = meetings[i];
        const total = curEnd - curStart;
        if(curStart > end + 1){
            res += curStart - end - 1;
        }
        end = Math.max(end, curEnd);
    }



    res += (days - end);
    return res;
};