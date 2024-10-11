/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    
   const heap = new PriorityQueue({
    compare: (a, b) =>{
        return a[0] - b[0];
    }
   });

    for(const w of workerTimes){
      heap.enqueue([w, w, 2]);
    }

    let best = 0;
    for(let i = 0; i < mountainHeight; i++){
        const [w, i, c] = heap.dequeue();
        best = w;
        heap.enqueue([w + i * c, i , c + 1]);
    }

    return best;

};