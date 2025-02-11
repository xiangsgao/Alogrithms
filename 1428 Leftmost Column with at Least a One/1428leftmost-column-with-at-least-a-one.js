/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    const [M, N] = binaryMatrix.dimensions();

    const binarySearch = (row) =>{

        let left = 0;
        let right = N - 1;

        let res = Infinity;
        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);
            const midE = binaryMatrix.get(row, mid);
            if(midE === 1){
                res = Math.min(res, mid);
                // search left for more left 1s
                right = mid - 1;
            }else{
                // search right because 1 not left of this
                left = mid + 1;
            }
        } 

        return res;
    }

    // left most 
    let res = Infinity;
    for(let i = 0; i < M; i++){
        if(binaryMatrix.get(i, N - 1) !== 1){
            continue; // if last is not 1, then this matrix has no 1
        }
        const curRes = binarySearch(i);
        res = Math.min(res, curRes);
    }

    return res === Infinity ? -1 : res;
};