/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {

    let curMax = -1;
    let res = 0;

    for(let i = 0; i < arr.length; i++){
        curMax = Math.max(arr[i], curMax);
        if(curMax === i){
            res += 1;
        }
    }

    //4,3,2,1,0,5

    return res;
};