/**
 * @param {number[]} arr
 * @param {number} 
 * @return {number}
 */
var maxJumps = function(arr, d) {
    const cache = new Map();

    let max = -Infinity;

    const getMax = (curPos, leftBound, rightBound) =>{
        
        if(cache.has(curPos)){
            return cache.get(curPos);
        }
        // jump left
        let maxJump = 0;
        for(let i = curPos - 1; i >= leftBound; i--){
            if(arr[i] >= arr[curPos]){
                break;
            }
            const newJump = 1 + getMax(i,  Math.max(0, i - d), Math.min(arr.length - 1, i + d));
            maxJump = Math.max(maxJump, newJump);
        }

        // right jump
        for(let i = curPos + 1; i <= rightBound; i++){

            if(arr[i] >= arr[curPos]){
                break;
            }
           
            const newJump = 1 + getMax(i,  Math.max(0, i - d), Math.min(arr.length - 1, i + d));
            maxJump = Math.max(maxJump, newJump);
        }

        cache.set(curPos, maxJump);
        return maxJump;   
    }

    for(let i = 0; i < arr.length; i++){
        max = Math.max(max, getMax(i, Math.max(0, i - d), Math.min(arr.length - 1, i + d)));
    }
    
    return max + 1;

};