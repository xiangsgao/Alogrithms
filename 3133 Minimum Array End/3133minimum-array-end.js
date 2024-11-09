/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    
    let iX = 1;
    let iN = 1;
    let res = x;
    while(iN < n){
        if((iX & x) === 0){
            if((iN & (n - 1))){
                res = res | iX;
            }
            iN = iN << 1;
        }
        iX = iX << 1;
    }

    return res;
};