/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const map = new Map();
    const dups = new Set();
    for(const n of nums){
        if(map.has(n)){
            continue;
        }
        const strN = `${n}`;
        for(const dig of strN){
            const index = Number(dig);
            map.set(n, (map.get(n) ?? "" ) + `${mapping[index]}`)
        }
        map.set(n, Number(map.get(n)));
    }

    return nums.sort((a, b) =>{
        const [aMapped, bMapped] = [map.get(a), map.get(b)];
        return aMapped - bMapped;
    });
};