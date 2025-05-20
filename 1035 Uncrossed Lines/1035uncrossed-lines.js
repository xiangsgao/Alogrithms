/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {

    const cache = new Map();
    const recursion = (i = -1, j = -1) =>{
        const key = `${i},${j}`;
        if(cache.has(key)){
            return cache.get(key);
        }
        let max = 0;
        for(let x = i + 1; x < nums1.length; x++){
            for(let y = j + 1; y < nums2.length; y++){
                if(nums1[x] === nums2[y]){
                    max = Math.max(max, 1 + recursion(x, y));
                }
            }
        }
        cache.set(key, max);
        return max;
    }

    

    const res = recursion();

    return res;



};