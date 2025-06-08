/**
 * @param {number} n
 * @return {number[]}
 */
 // idea is basically using recursion to generate all the numbers starting with digit 1 all the way to digit 9 in lexigraphical order and with the cosntraint that number is not greater than  n
var lexicalOrder = function(n) {
    
    const res = [];
    const dfs = (cur) =>{
        for(let i = 0; i <= 9; i++){
            const number = Number(String(cur) + String(i));
            if(number <= n){
                res.push(number);
                dfs(number);
            }else{
                break;
            }
        }
    }


    for(let i = 1; i <= 9 && i <= n; i++){
        res.push(i);
        dfs(i);
    }

    return res;

};