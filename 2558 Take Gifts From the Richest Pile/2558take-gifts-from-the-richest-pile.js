/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const que = new PriorityQueue({
        compare: (a, b) =>  b - a
    })

    let total = 0;
    for(const n of gifts){
        que.enqueue(n);
        total += n;
    }

    for(let i = 0; i < k; i++){
        const e = que.dequeue();
        const newE = Math.floor(Math.sqrt(e));
        que.enqueue(newE);
        total = total + newE - e;
    }

    return total;
};