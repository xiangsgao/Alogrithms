/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    const set = [];
    for(let i = 0; i * i <= c; i++){
        set.push(i);
    }

    let left = 0;
    let right = set.length - 1;


    while (left <= right){
        const a = set[left];
        const b = set[right];
        const sumOfSqured = a * a + b * b;
        if(sumOfSqured === c){
            return true;
        } 

        if(sumOfSqured < c){
            left += 1;
        }else{
            right -= 1;
        }
    }
    return false;
};


