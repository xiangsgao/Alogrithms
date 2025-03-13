/**
 * @param {number[][]} lights
 * @return {number}
 */
 // failed to solve because did not know line sweep alogrithm and figoure out you can make the light brightness accumulate
var brightestPosition = function(lights) {

    const d = new Map();

    for(const light of lights){
        const left = light[0] - light[1];
        const right = light[0] + light[1];
        d.set(left, (d.get(left) ?? 0) + 1);  
        d.set(right + 1, (d.get(right + 1) ?? 0) - 1);
    }

    const keys = [...d.keys()].sort((a, b) => a - b);
    let biggest = -Infinity;
    let idx = Infinity;
    let cur = 0;
    for(const k of keys){
        cur += d.get(k);
        if(biggest < cur){
            biggest = cur;
            idx = k;
        }
    }

    return idx;
}