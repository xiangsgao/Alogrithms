/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    
    const map = new Map();
    let res = 0;
    for(let i = 0; i < dominoes.length; i++){
        const [a, b] = dominoes[i];
        const key = `${Math.min(a,b)},${Math.max(a,b)}`;
        if(map.has(key)){
            res += map.get(key);
            map.set(key, map.get(key) + 1);
        }else{
            map.set(key, 1);
        }
    }

    return res;
};