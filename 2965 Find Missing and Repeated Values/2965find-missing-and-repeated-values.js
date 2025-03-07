/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const N = grid.length;
    const set = new Set(Array(N * N).fill().map((_, i)=> i + 1));
    let repeat = -1;
    for(const arr of grid){
        for(const e of arr){
            if(!set.has(e)){
                repeat = e;
            }else{
                set.delete(e);
            }

        }
    }

    return [repeat, set.values().next().value]
};