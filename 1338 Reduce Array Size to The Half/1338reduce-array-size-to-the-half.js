/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = new Map();
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total -= map.get(arr[i]) ?? 0;
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1 )
        total += map.get(arr[i]);
    }

    const entries = [...map.entries()].sort(([_, a], [__, b]) => a - b);
    let curTotal = total;
    let minRemoved = 0;
    while(curTotal > total / 2){
        const [_, freq] = entries.pop();
        curTotal -= freq;
        minRemoved += 1;    
    }

    return minRemoved;

};