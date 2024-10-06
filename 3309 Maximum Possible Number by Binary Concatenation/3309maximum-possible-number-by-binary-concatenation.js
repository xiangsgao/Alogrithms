/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function(nums) {
    const bStr = nums.map(e => e.toString(2));

    let retval = 0;
    const picked = new Set();
    const bruteForce = (cur = "") =>{
        if(picked.size === bStr.length){
            retval = Math.max(retval, parseInt(cur, 2));
        }

        for(let i = 0; i < bStr.length; i++){
            if(picked.has(i)){
                continue;
            }
            picked.add(i);
            bruteForce(cur + bStr[i]);
            picked.delete(i);
        }
    }
    
    bruteForce();
    return  retval;
};