/**
 * @param {number[][]} paint
 * @return {number[]}
 */
 // unable to solve because not realizing using map to keep track of all the painted of i start to end of each day's paint job
var amountPainted = function(paint) {
    
    const map = new Map();
    const res = [];
    for(const [start, end] of paint){
        let cur = start;
        let painted = 0;
        // while the cur position is less than the end
        while(cur < end){
            // if this position is not yet painted, set cur => end in the map
            if(!map.has(cur)){
                map.set(cur, end);
                painted++;
                cur++;
            }else{
                // else, move the cur to the end of previously painted. also update the previously painted end to whichever is longer
                const prev = map.get(cur);
                map.set(cur, Math.max(map.get(cur), end));
                cur = prev;
            }
        }

        res.push(painted);
    }

    return res;
};
