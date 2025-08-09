/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    
    const heap = new PriorityQueue((a, b) =>{
        return a - b;
    });

    for(const n of sticks){
        heap.enqueue(n);
    }

    let totalCost = 0;
    while(heap.size() > 1){
        const first = heap.dequeue();
        const second = heap.dequeue();
        const cost = first + second;
        totalCost += cost;
        heap.enqueue(cost);
    }


    return totalCost;

};