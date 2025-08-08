/**
 * @param {number} n
 * @return {number[][]}
 */
 // couldnt solve because i suck at coding.
 // idea is that peel the matrices layer by layer like an onion. use four pointers to make coding easier and avoiding confusions
var generateMatrix = function(n) {
    const mat = Array(n).fill().map(() => Array(n).fill(0));

    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    let val = 1;

    while(left <= right){
        
        // top row
        for(let c = left; c < right + 1; c++){
            mat[top][c] = val++;
        }
        top += 1;

        // fill all the right
        for(let r = top; r < bottom + 1; r++){
            mat[r][right] = val++;
        }
        right -= 1;

        // fill the bottom
        for(let c = right; c >= left; c--){
             mat[bottom][c] = val++;
        }
        bottom -= 1;

        // fill left
        for(let r = bottom; r >= top; r--){
            mat[r][left] = val++;
        }

        left += 1;
    }

    return mat;
};