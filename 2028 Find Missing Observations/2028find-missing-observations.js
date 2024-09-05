/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    // sums
    const sum = rolls.reduce((acc, e) => acc + e, 0);
    const totalRolls = rolls.length + n;
    // algebra (sum + n1, n2... n) / total rolls = mean
    let missingSum = mean * totalRolls;
    //   (sum + n1, n2... n) = op
    missingSum -= sum;
    // n1, n2... n = op;
    let equalParts = missingSum / n;
    // impossible if the max roll of each missing n needed is greater than 6
    if(equalParts > 6){
        return [];
    }

    // also not possible if the missing n sum is less than the minimum sum possible of n rolls
    if(missingSum < n){
        return [];
    }

    // else, balance it
    equalParts = Math.trunc(equalParts);
    const retval = Array(n).fill(equalParts);
    let curTotal = equalParts * n;
    let i = 0;
    while(curTotal < missingSum){
        if(i >= n - 1){
            i = 0;
            continue;
        }
        if(retval[i] === 6){
            i++;
            continue;
        }
        retval[i] += 1;
        curTotal += 1;
        i++;
    }

    return retval;
};