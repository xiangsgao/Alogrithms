/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    let sum = 0;
    let biggest = -Infinity;
    for(const e of damage){
        sum += e;
        biggest = Math.max(e, biggest);
    }   
    
    const dif = armor - biggest;

    if(dif >= 0){
        return sum - biggest + 1;
    }else{
        return sum - armor + 1;
    }
};