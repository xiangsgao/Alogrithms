/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const mod = Math.pow(10, 9) + 7;
    const dp = new Map();
    const bruteForce = (len = 0) =>{
        const key = len;
        if(len > high){
            return 0;
        }

        if(dp.has(key)){
            return dp.get(key);
        }

        let res = len >= low ? 1 : 0;

        res +=  bruteForce(len + zero) + bruteForce(len + one);
        dp.set(key, res);
        return res % mod;
    }
    
    return bruteForce();

};