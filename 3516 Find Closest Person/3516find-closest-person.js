/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const person1 = Math.abs(x - z);
    const person2 = Math.abs(y - z);
    if(person1 === person2){
        return 0;
    }
    if(person2 < person1){
        return 2;
    }

    return 1;
};