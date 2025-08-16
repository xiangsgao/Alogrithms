/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
    let positive = 0;
    let negative = 0;

    const retval  = [];

    while(nums[positive] < 0 && positive < nums.length){
        positive++;
    }

    while(nums[negative] >= 0 && positive < nums.length){
        negative++;
    }

    while(retval.length < nums.length){
        retval.push(nums[positive++]);
        retval.push(nums[negative++]);

        while(nums[positive] < 0 && positive < nums.length){
            positive++;
        }

        while(nums[negative] >= 0 && negative < nums.length){
            negative++;
        }
    }
    return retval;
};