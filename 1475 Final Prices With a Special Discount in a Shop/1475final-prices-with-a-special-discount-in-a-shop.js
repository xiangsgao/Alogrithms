/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {

    const stack = [] // contains indices of all elements that are greater than current element


    for(let i = 0; i < prices.length; i++){
        const cur = prices[i];
        while(stack.length && prices[stack[stack.length - 1]] >= cur) {
            const index = stack.pop();
            prices[index] = prices[index] - cur;
        }

        stack.push(i);
    } 

    return prices;
};