/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const visited = new Set();
    let cur = n;
    while(true){
        if(visited.has(cur)){
            return false;
        }
        visited.add(cur);
        const digits = cur.toString().split("").map(e => Math.pow(Number(e),2)).reduce((acc, e) => acc + e, 0);
        if(digits === 1){
            return true;
        }
        cur = digits;
    }
};