/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const numsStr = num.toString().split("");
    
    let max = "0";
    let maxI = -1;
    let swapI = -1;
    let swapJ = -1;
    for(let i = numsStr.length - 1; i >=0; i--){
       if(Number(numsStr[i]) > Number(max)){
            max = numsStr[i];
            maxI = i;
       };

       if(Number(numsStr[i]) < Number(max)){
            swapI = i;
            swapJ = maxI;
       }
    }
    const one = numsStr[swapI];
    const two = numsStr[swapJ];
    numsStr[swapJ] = one;
    numsStr[swapI] = two;
    return Number(numsStr.join(""));
};