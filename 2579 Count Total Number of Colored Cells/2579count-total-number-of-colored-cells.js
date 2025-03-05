/**
 * @param {number} 
 * @return {number}
 */
 // cant solve, stinky math
var coloredCells = function(n) {
    
    let res = 1;

    for(let i = 0; i < n ; i++){
        res += (4*i);
    }

    return res;

};

//1 5 6 13 25 41 61