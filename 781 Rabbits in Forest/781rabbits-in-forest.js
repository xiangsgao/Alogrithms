/**
 * @param {number[]} answers
 * @return {number}
 */
 // solved this via trial and errors
var numRabbits = function(answers) {
    

    answers.sort((a, b) => a - b);

    const groups = [];

    let curGroup = [answers[0]];
    let count = 1;
    for(let i = 1; i < answers.length; i++){
        const cur = answers[i];
        if(cur === curGroup[0] && count < cur + 1){
            count += 1;
            curGroup.push(cur);
        }else{
            groups.push(curGroup);
            curGroup = [cur];
            count = 1;
        }
    }

    groups.push(curGroup);

    let res = 0;
    for(const g of groups){
        const e = g[0];
        res += Math.max(g.length, e + 1);
    }

    return res;
};