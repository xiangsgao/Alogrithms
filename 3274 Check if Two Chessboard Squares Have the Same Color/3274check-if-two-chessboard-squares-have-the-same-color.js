/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */

const checkCord = (cord) =>{
    const [letter, number] = cord.split("");
    const numberNeedToBeOdd = "aceg".includes(letter);
    const intNum = Number(number);
    const isOdd = intNum % 2 !== 0;
    return numberNeedToBeOdd ? isOdd : !isOdd;
};

var checkTwoChessboards = function(coordinate1, coordinate2) {
    const isBlack = checkCord(coordinate1);
    const isBlack2 = checkCord(coordinate2);

    return isBlack === isBlack2;
};