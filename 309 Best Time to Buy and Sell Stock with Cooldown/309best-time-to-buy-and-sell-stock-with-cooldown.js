/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const map = new Map();

    const dfs = (i = 0, buy = true) =>{
        
        
        if(i >= prices.length){
            return 0;
        }

        const key = `${i},${buy}`;

        if(map.has(key)){
            return map.get(key);
        }


        // buy
        const buyRes = buy ? dfs(i + 1, false) - prices[i] : -Infinity;
        // sell 
        const sellRes = !buy ? dfs(i + 2, true) + prices[i] : -Infinity;


        // can also skip
        const skipRes = dfs(i + 1, buy);
        const res = Math.max(buyRes, sellRes, skipRes);
        map.set(key, res);
        return res;
    }

    return dfs();
};