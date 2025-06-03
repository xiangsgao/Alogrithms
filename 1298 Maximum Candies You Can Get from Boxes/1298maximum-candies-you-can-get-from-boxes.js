/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
 // was too lazy to solve this but the trick is to use three data structures
 // processing means boxes that are open and need to handle in the next bfs
 // locked boxes means all the boxes that are found but currently locked
 // visited means all the boxes that are processed and candies taken already
 // use these data structures to simulate opening boxes, getting keys, and opening more boxes found within the boxes
 
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    const visited = new Set();

    const N = status.length;
    const processing = [];
    const lockedBoxes = new Set();

    for(const box of initialBoxes){
        if(status[box] === 1){
            visited.add(box);
            processing.push(box);
        }else{
            lockedBoxes.add(box);
        }
    }

    let res = 0;

    while(processing.length){
        const cur = processing.shift();
        res += candies[cur];
        for(const key of keys[cur]){
            status[key] = 1;
            if(lockedBoxes.has(key)){
                visited.add(key);
                lockedBoxes.delete(key);
                processing.push(key);
            }
        }
        for(const box of containedBoxes[cur]){
            if(visited.has(box)){
                continue;
            }
            if(status[box] === 1){
                visited.add(box);
                processing.push(box);
            }else{
                lockedBoxes.add(box);
            }
        }
    }

    return res;

};