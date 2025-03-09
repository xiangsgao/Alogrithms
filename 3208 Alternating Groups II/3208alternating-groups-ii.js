/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    const N = colors.length;
    let left = 0;
    const starts = new Set();
    let prevColor = null;
    for(let right = 0; right < N * 2; right++){
        const modRight = right % N;
        const curColor = colors[modRight];

        // make this the new left
        if(curColor === prevColor){
            left = right;
        }

        if(right - left + 1 === k){
            const leftMod = left % N;
            starts.add(leftMod);
            left++;
        }
        prevColor = curColor;
    }

    return starts.size;
};