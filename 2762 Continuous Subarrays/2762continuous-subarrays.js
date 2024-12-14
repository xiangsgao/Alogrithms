/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    

    let left = 0;
    let right = 0;
    let res = 0;
    const map = new Map();

    for(; right < nums.length; right++){
        const cur = map.get(nums[right]) ?? 0;
        map.set(nums[right], cur + 1);
        let keys = [...map.keys()];
        while(Math.max(...keys) - Math.min(...keys) > 2){
            const cur2 = map.get(nums[left]) - 1;
            map.set(nums[left], cur2);
            if(cur2 === 0){
                map.delete(nums[left]);
            }
            left++;
            keys = [...map.keys()];
        }
        res += right - left + 1;
    }


    return res;
};