/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const map = new Map();

    for(let i = 0; i < n; i++){
        map.set(i + 1, i + 2);
        if(i === n - 1){
            map.set(i + 1, 1);
        }
    }

    let cur = 1;
    while (map.size > 1){
        let times = k - 1;
        let pre = cur;
        while(times > 0){
            if(times === 1){
                pre = cur;
            }
            cur = map.get(cur);
            times--;
        }
        const next = map.get(cur)
        map.set(pre, next);
        map.delete(cur);
        cur = next;
    }
    return cur;
};