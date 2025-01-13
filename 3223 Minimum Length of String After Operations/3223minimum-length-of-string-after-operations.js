/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const count = new Map();

    for(const c of s){
        count.set(c, (count.get(c) ?? 0) + 1);
    }


    let total = 0;

    for(const sum of count.values()){
        const isEven = sum % 2 === 0;
        if(isEven){
            total += 2;
        }else {
            total += 1
        }
    }

    return total;
};