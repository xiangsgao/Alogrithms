/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    const intMap = "0123456789".split("").reduce((acc, e, i) => {
        acc[e] = i;
        return acc;
    }, {});

    let x = 0;
    let power = 1;
    for(let i = num1.length - 1; i >= 0; i--){
        const cur = intMap[num1[i]];
        x += power * cur;
        power *= 10;
    }

    let y = 0;
    power = 1;
    for(let i = num2.length - 1; i >= 0; i--){
        const cur = intMap[num2[i]];
        y += power * cur;
        power *= 10;
    }

    return String(x * y);

};