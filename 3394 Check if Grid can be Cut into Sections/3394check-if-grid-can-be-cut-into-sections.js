/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */

 // couldnts solve because did not realize that we can count the none overlapping rectangles vertically and horizontally and if any of them is greater than 3 then we can divide the grid into three sections
var checkValidCuts = function(n, rectangles) {
    const sortedHorizontal = rectangles.map((e) => [e[0], e[2]]).sort(([a],[b]) => a - b);

    const sortedVertical = rectangles.map((e) => [e[1], e[3]]).sort(([a], [b]) => a - b);

    const noneOverlap = (intervals) =>{
        let count = 0;
        let prev = -1;
        for(const [start, end] of intervals){
            if(prev <= start){
                count += 1;
            }
            prev = Math.max(end, prev);
        }

        return count;
    }

    return Math.max(
        noneOverlap(sortedHorizontal),
        noneOverlap(sortedVertical)
    ) >= 3;

};