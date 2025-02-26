/**
 * @param {number[]} nums
 * @return {number}
 */
var getLargestOutlier = function(nums) {
    // add up all the numbers except two
    // one of the number is the sum, the other is the outlier 
    // return the outlier

    nums = nums.sort((a, b) => a - b);
    const map = new Map();
    const total = nums.reduce((acc, e) => {
        map.set(e, (map.get(e) ?? 0) + 1);
        return acc + e;
    }, 0);

    const canThisBeAnOutlier = (outlier) =>{
        const sumWithoutOutlier = total - outlier;



        // need to find the one number that sums the rest
        for(const key of map.keys()){
            const finalSum = sumWithoutOutlier - key;
            if(finalSum === key){
                return true;
            }
        }
        return false;
    }

    for(let i = nums.length - 1; i >=0; i--){
        map.set(nums[i], map.get(nums[i]) - 1);
        if(map.get(nums[i]) === 0){
            map.delete(nums[i]);
        }
 
        if(canThisBeAnOutlier(nums[i])){
            return nums[i];
        }
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }

    return -1;
};