/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map = new Map();
    for(const n of nums){
        map.set(n, (map.get(n) ?? 0) + 1);
    }

    return [...map.entries()].sort(([n, freq], [n2, freq2]) => {
        if(freq === freq2){
            return n2 - n;
        }

        return freq - freq2;
    }).reduce((acc, [n, freq]) => [...acc, ...Array(freq).fill(n)], []);
};