/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const M = matrix.length;
    const N = matrix[0].length;

    let startX = 0; // cols
    let startY = 0; // rows;
    let endX = N - 1;
    let endY = M - 1;

    const res = [];
    while(res.length < (M * N)){
             
        // top
        for(let i = startX ; i <= endX && res.length < (M * N); i++){
            res.push(matrix[startY][i]);
        }
  
        startY += 1;
        
        for(let i = startY; i <= endY && res.length < (M * N); i++){
            res.push(matrix[i][endX]);
        }

        
       
        endX -= 1;

        for(let i = endX; i >= startX  && res.length < (M * N); i--){
            res.push(matrix[endY][i]);
        }
       
        endY -= 1;

        for(let i = endY; i >= startY  && res.length < (M * N); i--){
            res.push(matrix[i][startX]);
        }
        startX += 1;
    }

    return res;
};