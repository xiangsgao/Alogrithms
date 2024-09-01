/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    const totalElement = m * n;
    if(original.length !== totalElement){
        return [];
    }

    const twoD = [];

    for(let i = 0; i < m; i++){
        const row = [];
        for(let j = 0; j < n; j++){
            const cur =  original.shift();
            row.push(cur);
        }
        twoD.push(row);
    }

    return twoD;

};