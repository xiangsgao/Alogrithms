/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    
    let curNums = s.split("").map(e => Number(e));

    while(1){
        const newNums = [];
        let prev = curNums[0];
        for(let i = 1; i < curNums.length; i++){
            const cur = curNums[i];
            const newNum = (cur + prev) % 10;
            newNums.push(newNum);
            prev = cur;
        }
        if(curNums.length === 2){
            return curNums.at(-1) === curNums.at(-2);
        }
        curNums = newNums;   
    }
};