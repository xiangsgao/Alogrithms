/**
 * @param {string} initialCurrency
 * @param {string[][]} pairs1
 * @param {number[]} rates1
 * @param {string[][]} pairs2
 * @param {number[]} rates2
 * @return {number}
 */
var maxAmount = function(initial, pairs1, rates1, pairs2, rates2) {
    const map1 = new Map();
    const map2 = new Map();

    const targetCurrencies1 = new Set();
 
    for(let i = 0; i < pairs1.length; i++){
        const [from, to] = pairs1[i];
        const rate = rates1[i];
        const cur = map1.get(from) ?? {};
        const inverseCur = map1.get(to) ?? {};
        cur[to] = rate;
        inverseCur[from] = 1 / rate;
        map1.set(from, cur);
        map1.set(to, inverseCur);
        targetCurrencies1.add(to);
        targetCurrencies1.add(from);
    }

    const targetCurrencies2 = new Set();
    for(let i = 0; i < pairs2.length; i++){
        const [from, to] = pairs2[i];
        const rate = rates2[i];
        const cur = map2.get(from) ?? {};
        const inverseCur = map2.get(to) ?? {};
        cur[to] = rate;
        inverseCur[from] = 1 / rate;
        map2.set(from, cur);
        map2.set(to, inverseCur);
        targetCurrencies2.add(to);
        targetCurrencies2.add(from);
    } 

    // always get the optimial value after converting
    const visited = new Set();
    const convert = (map, currency, target, amount) =>{
        if(currency === target){
            return amount;
        }

        if(map.get(currency)?.[target] !== undefined){
            return map.get(currency)[target] * amount;
        }
        
        if(visited.has(currency)){
            return -Infinity;
        }

        visited.add(currency); 
        let max = -Infinity;
        const toCurrencies = map.get(currency) ?? {};
        for(const newCurrency of Object.keys(toCurrencies)){
            const rate = map.get(currency)[newCurrency];
            const maxAmount = convert(map, newCurrency, target, amount * rate);
            max = Math.max(max, maxAmount);
        }
        visited.delete(currency);
        return max;
    }

    let max = 1;
    // picked all  currency in day one
    for(const currency of targetCurrencies1.values()){
        const newAmount = convert(map1, initial, currency, 1);
        for(const currency2 of targetCurrencies2.values()){        
            // if(currency === ""){
            //     console.log({newAmount, currency});
            // }   
            const newAmount2 = convert(map2, currency, initial, newAmount);
            max = Math.max(newAmount2, max);
        }
    }

    return max;

};