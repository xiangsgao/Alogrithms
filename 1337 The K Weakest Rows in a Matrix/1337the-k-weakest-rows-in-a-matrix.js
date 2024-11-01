/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const retval = mat.map((e, i) =>{
        const lastIndex = e.findIndex(x => x === 0);
        return [lastIndex === -1 ? Infinity : lastIndex, i]
    }).sort(([zIdx, i], [zIdx2, i2]) =>{
        if(zIdx === zIdx2){
            return i - i2;
        }
        return zIdx - zIdx2;
    });

    return retval.slice(0, k).map(([_, i]) => i);
};