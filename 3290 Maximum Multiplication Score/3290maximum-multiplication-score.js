

function dp(a, i, b, j, cache) {


        if (i === a.length) {
            return 0;
        } else if (j === b.length) {
            return  -Infinity;
        }
        
        if (cache[i][j] !== Infinity) {
            return cache[i][j];
        }

        const x = a[i] * b[j] + dp(a, i + 1, b, j + 1, cache);
        const y = dp(a, i, b, j + 1, cache);

        const result = Math.max(x, y);
        cache[i][j] = result;
        return result;
    } 



var maxScore = function(a, b) {
     const cache =  Array(a.length).fill().map(() => Array(b.length).fill(Infinity));
     return dp(a, 0, b, 0, cache);
};