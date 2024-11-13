/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const map = new Map();

        const dfs = (i, j) =>{
            const key = `${i},${j}`;

            if(j === t.length){
                return 1;
            }

            if(i === s.length){
                return 0;
            }

            if(map.has(key)){
                return map.get(key);
            }

            if(s[i] === t[j]){
                const res = dfs(i + 1, j + 1) + dfs(i + 1, j);
                map.set(key, res);
            }else{
                const res = dfs(i + 1, j);
                map.set(key,res);
            }

            return map.get(key);
        }

        return dfs(0,0);
};