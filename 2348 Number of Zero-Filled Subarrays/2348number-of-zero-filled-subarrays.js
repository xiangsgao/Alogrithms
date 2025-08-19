/**
 * @param {number[]} nums
 * @return {number}
 */
 // solved this on my own eventually but nothing that number of subarrays in 5 zeroes are...
 // 0 0 0 0 0
 // 1 2 3 4 5
 // going from right to left. how many subarray of 1 zero, how many subarray of 2 zeroes, and so on
 // add these numbers up and you get 15
var zeroFilledSubarray = function(nums) {
    
    let val = 0;
    let streak = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            streak++;
        }else{
            for(let j = streak; j >= 1; j--){
                val += j;
            }
            streak = 0;
        }
    }

      for(let j = streak; j >= 1; j--){
                val += j;
            
       }

    return val;
};