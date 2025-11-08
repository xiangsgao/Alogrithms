/**
 * @param {number} n
 * @return {number}
 */
 // math problem. just memorize 
var minimumOneBitOperations = function(n) {
    if (n === 0) return 0;
    let k = 0;
    while ((1 << (k + 1)) <= n) k++;
    return (1 << (k + 1)) - 1 - minimumOneBitOperations((1 << k) ^ n);
};