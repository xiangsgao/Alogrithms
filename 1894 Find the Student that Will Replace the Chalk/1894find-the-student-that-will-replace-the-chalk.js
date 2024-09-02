/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const total = chalk.reduce((acc, e) => acc + e, 0);
    k =  k % total;
    let i = 0;
    while(k >= 0){
        k -= chalk[i++];
    }

    return  i - 1;

};