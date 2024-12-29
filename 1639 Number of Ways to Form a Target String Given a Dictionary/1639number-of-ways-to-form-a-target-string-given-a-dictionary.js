/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const mod = Math.pow(10, 9) + 7;
    const map = new Map();
    const dp = new Map();

    const len = words[0].length;
    for(const w of words){
        for(let i = 0; i < w.length; i++){
            const c = w[i];
            map.set(`${i},${c}`, (map.get(`${i},${c}`) ?? 0) + 1);
        }
    }


    const recursive = (i = 0, k = 0) => {
        
        if(i === target.length){
            return 1;
        }

        if(k === len){
            return 0;
        }

        const key = `${i},${k}`;
        if(dp.has(key)){
            return dp.get(key) % mod;
        }

        const c = target[i];
        dp.set(key, recursive(i, k + 1));
        const count = (map.get(`${k},${c}`) ?? 0) * recursive(i + 1, k + 1);
        dp.set(key, dp.get(key) + count);
        return dp.get(key) % mod;
    }

    const test = recursive();
    return test;
}
