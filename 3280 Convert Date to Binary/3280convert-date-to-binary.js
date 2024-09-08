/**
 * @param {string} date
 * @return {string}
 */

const convertToNum = (number) =>{

    if(number === 0){
        return "";
    }

    let power = 0;
    while(2 * Math.pow(2, power) <= number){
        power += 1;
    }

    const biggest = Math.pow(2, power);
    const curBinary = ("1" + "0".repeat(power)).split("");
 
    const remaining = number - biggest;
    const remainingBinary = convertToNum(remaining).split("");
    
    let curIndex = curBinary.length - 1;
    while(remainingBinary.length){
        const last = remainingBinary.pop();
        curBinary[curIndex] = last === "1" ? "1" : curBinary[curIndex]; 
        curIndex--;
    }
    return curBinary.join("");
    
}

var convertDateToBinary = function(date) {
    const split = date.split("-");


    const retval = split.map(e => convertToNum(Number(e))).join("-");
    return retval;

};