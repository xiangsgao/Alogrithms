/**
 * @param {number[]} maximumHeight
 * @return {number}
 */

 // failed to ask myself what if all the maxium heights are the same? if you work with this example, it is pretty intutive to see that once sorted, the next height has to be minimum of the previous assigned height - 1 or the its maximumHeight allowed
var maximumTotalSum = function(maximumHeight) {
    const pq = new PriorityQueue({
        compare: (a, b) => b - a
    });

    for(let i = 0; i < maximumHeight.length; i++){
        pq.enqueue(maximumHeight[i]);
    }

    let res = 0;
    let min = Infinity;
    while(!pq.isEmpty()){
        let h = pq.dequeue();

        h = Math.min(h, min);
        
        res += h;
        min = h - 1;

        if(h <= 0){
            return -1;
        }
    }

    return res === Infinity ? -1 : res;
};