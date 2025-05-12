/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const res = new Set();
    for(let i = 0; i < digits.length; i++){
        if(digits[i] === 0){
            continue;
        }
        for(let j = 0; j < digits.length; j++){
            if(j === i){
                continue;
            }
            for(k = 0; k < digits.length; k++){
                if(k === i || k === j){
                    continue;
                }

                if(digits[k] % 2 === 1){
                    continue;
                }
                res.add(Number(
                    `${digits[i]}${digits[j]}${digits[k]}`
                ));
            }
        }
    }

    return [...res.values()].sort((a, b) => a - b);

};