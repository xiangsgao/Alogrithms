/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    

    const arr = Array(n + 1).fill(0);
    const resArr = [];
    let res = 0;
    for(let i = 0; i < queries.length; i++){
        const [idx, color] = queries[i];
        const existing = arr[idx];

        if(existing && existing === arr[idx - 1]){
            res -= 1;
        }
        
        if(existing && existing === arr[idx + 1]){
            res -= 1;
        }

        arr[idx] = color;

        if(arr[idx] === arr[idx - 1]){
            res += 1;
        }
        
        if(arr[idx] === arr[idx + 1]){
            res += 1;
        }

        resArr.push(res);
    }


    return resArr;


};