/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    

    let count = 0;
    let max = 0;
    let i = 0
    for(; i < k; i++){
        const cur = blocks[i];
        if(cur === "B"){
            count+=1;
        }
    }

    max = Math.max(count, max);
    for(; i < blocks.length; i++){
        const first = blocks[i - k];
        const last = blocks[i];
        if(last === "B"){
            count += 1;
        }

        if(first === "B"){
            count -= 1;
        }

        max = Math.max(max, count);
    }

    return k - max;

};