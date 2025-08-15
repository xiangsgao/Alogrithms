/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
 // notice that the min difference must be neighbors in a shorted pairs
 // we can guess what that difference is using binary search and then linearlly check the neigboring pairs to see if enough p pairs are less than or equal to the difference
var minimizeMax = function(nums, p) {
    nums = nums.sort((a,b) => a - b);


    let low = 0;
    let high = Math.pow(10, 9);

    let res = Infinity;

    const isValid = (dif) =>{
        let i = 0;
        let count = 0;
        for(; i< nums.length - 1;){
            if(Math.abs(nums[i] - nums[i + 1]) <= dif){
                count += 1;
                i+=2;
            }else{
                i++;
            }

            if(count === p){
                return true;
            }
        
        }

        return false;
    }

    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);
        if(isValid(mid)){
            res = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return res === Infinity ? 0 : res;
};