/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const dp = new Map();
    nums.push(1);
    nums.unshift(1);

    const dfs = (l, r) =>{

        const key = `${l},${r}`;
        if(l > r){
            return 0;
        }

        if(dp.has(key)){
            return dp.get(key);
        }

        dp.set(key, 0);

        for(let i = l; i < r + 1; i++){
            let coins = nums[l - 1] * nums[i] * nums[r + 1];
            coins += dfs(l, i - 1) + dfs(i + 1, r);
            dp.set(key, Math.max(dp.get(key), coins));
        }

        return dp.get(key);
    }
    
    return dfs(1, nums.length -2);
};