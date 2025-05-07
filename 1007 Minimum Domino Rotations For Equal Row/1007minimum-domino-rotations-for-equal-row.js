/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    

    const getMin = (e) =>{
        let bottomCnt = bottoms[0] === e ? 0 : 1;
        let topCnt = tops[0] === e ? 0 : 1;
        for(let i = 1; i < tops.length; i++){
            const topE = tops[i];
            const bottomE = bottoms[i];

            if(topE !== e && bottomE !== e){
                return Infinity;
            }

            if(topE !== e){
                topCnt += 1;
            }

            if(bottomE !== e){
                bottomCnt += 1;
            }
        }

        return Math.min(topCnt, bottomCnt);
    }

    
    const res = Math.min(getMin(tops[0]), getMin(bottoms[0]));

    if(res === Infinity){
        return -1;
    }

    return res;
};