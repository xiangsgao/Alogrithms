/**
 * @param {number[][]} mat
 * @return {number}
 */
 // idea is to add up all the rows and then check the minimum colums
 // e.g. 
 /*
   111
   001
   111          we sum up all the columns by looking left, then get the minimum rows by              looking up
 */
var numSubmat = function(mat) {
    const M = mat.length;
    const N = mat[0].length;
    let res = 0;
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(mat[i][j] === 1){
                mat[i][j] += mat[i][j - 1] ?? 0;

                let cur = mat[i][j];
                
                // check rows
                for(let k = i; k >= 0; k--){
                    cur = Math.min(cur, mat[k][j]);
                    if(cur === 0){
                        break;
                    }
                    res += cur;
                }
            }
        }

    }
    return res;
};