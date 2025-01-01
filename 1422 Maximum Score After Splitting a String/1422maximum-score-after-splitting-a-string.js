/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    

    let left = 0;
    let right = s.length - 1;
    const leftZeroes = [];
    const rightOnes = [];
    let max = -Infinity;

    while(left < s.length - 1){
        const leftE = s[left];
        const rightE = s[right];

        const leftIncrement = leftE === "0" ? 1 : 0;
        const rightIncrement = rightE === "1" ? 1 : 0;

        

        leftZeroes[left] = (leftZeroes[left - 1] ?? 0) + leftIncrement;
        rightOnes[right] = (rightOnes[right + 1] ?? 0) + rightIncrement;

        if(leftZeroes[left] !== undefined && rightOnes[left + 1] !== undefined){
            max = Math.max(max, leftZeroes[left] + rightOnes[left + 1])
        }

        if(leftZeroes[right] !== undefined && rightOnes[right] !== undefined){
            max = Math.max(max, leftZeroes[right - 1] + rightOnes[right])
        }

        left++;
        right--;

    }

    return max === -Infinity ? 1 : max;

};