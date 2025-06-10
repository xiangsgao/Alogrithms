/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    
    let left = 0;
    let res = 0;
    const types = new Map();
    for(let right = 0; right < fruits.length; right++){
        const cur = fruits[right];
        types.set(cur, (types.get(cur) ?? 0) + 1);

        while(types.size > 2){
            const removed = fruits[left++];
            types.set(removed, types.get(removed) - 1);
            if(types.get(removed) === 0){
                types.delete(removed);
            }
        }
       
        res = Math.max(res, right - left + 1);

    }   

    
    return res;

};