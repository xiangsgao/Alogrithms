/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

 // cant solve because i cant figoure out the push to heap then take it out and put it back technique
 
var furthestBuilding = function(heights, bricks, ladders) {
    const heap = new PriorityQueue((a, b) =>{
        return b - a;
    });

    for(let i = 0; i < heights.length -1; i++){
        const dif = heights[i + 1] - heights[i];
        if(dif <= 0){
            continue;
        }
        bricks -= dif;
        heap.enqueue(dif);
        if(bricks < 0){
            if(ladders === 0){
                return i;
            }
            ladders -= 1;
            const maxJump = heap.dequeue();
            bricks += maxJump;
        }
    }
    return heights.length -1;
};