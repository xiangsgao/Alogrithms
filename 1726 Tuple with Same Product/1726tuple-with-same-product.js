/**
 * @param {number[]} nums
 * @return {number}
 */
 // failed to solve because of failing some math observation.  
var tupleSameProduct = function(nums) {
    
    const result = 0;

    // get all the pairs 
    const map = new Map();
    const map2 = new Map();
    
    for(let i = 0 ; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            const product = nums[i] * nums[j];
            const exisiting = map.get(product) ?? 0;
            map2.set(product, exisiting + (map2.get(product) ?? 0))
            map.set(product, exisiting + 1);
        }
    }

    let res = 0;

    for(const pairNum of map2.values()){
        res += 8 * pairNum;
    }
    return res;

};