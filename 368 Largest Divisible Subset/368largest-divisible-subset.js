/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // the idea is to brute force all the possible subsets. we know if the next i is divisible by the previous i, then all the previous i can also divide that next i.
 // last also know the best subset do not need to include the first index or the 2nd index elemenet. need to do another loop for it. 

var largestDivisibleSubset = function(nums) {

    nums = nums.sort((a, b) => a - b);
    const cache = new Map();
    const recursion = (i = 0) =>{
        if(i === nums.length){ 
            return [];
        }

        if(cache.has(i)){
            return cache.get(i);
        }
        let res = [nums[i]];

        // can include the element if divisble or skip the current element for the next
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] % nums[i] === 0){
                const tmp = [nums[i], ...recursion(j)];
                if(tmp.length > res.length){
                    res = tmp;
                }
            }
        }
        cache.set(i, res);
        return res;
    }

    let res = [];
    for(let i = 0; i < nums.length; i++){
        const temp = recursion(i);
        if(temp.length > res.length){
            res = temp;
        }
    }

    return res;
};