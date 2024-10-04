/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const sorted = skill.sort((a, b) => a - b);
    const res = [[sorted[0], sorted[sorted.length - 1]]];
    const equal = sorted.pop() + sorted.shift();
    while(skill.length){
        const greater = sorted.pop();
        const lesser = sorted.shift();
        if(greater + lesser !== equal){
            return -1;
        }
        res.push([lesser, greater]);
    }
    
    return res.reduce((acc, [a, b]) => acc + (a * b), 0) ;
};