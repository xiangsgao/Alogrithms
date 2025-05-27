/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divisible = 0;
    let notDivisble = 0;
    for(let i = 1; i <= n; i++){
        if(i % m === 0){
            divisible += i;
        }else{
            notDivisble += i;
        }
    }
    return notDivisble - divisible;
};