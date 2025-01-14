/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const hashSetA = new Set();
    const hashSetB = new Set();
    const res = [];
    for(let i = 0; i < A.length; i++){
     
        const aE = A[i];
        const bE = B[i];
        hashSetA.add(aE);
        hashSetB.add(bE);
        const inCommon = new Set();
        if(hashSetB.has(aE)){
            inCommon.add(aE);
        }

        if(hashSetA.has(bE)){
            inCommon.add(bE);
        }

        res[i] = (res[i - 1] ?? 0) + inCommon.size;

    }

    return res;

};