/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
 // coundt solve because not realizing that although line sweep is N^2 for each queries, we can binary search based on the numbers of queries we want to perform so far. if number of queries not enough, move mid to the right index of the queries array, if enough, look for a smaller number 
var minZeroArray = function(nums, queries) {
    
    const N = nums.length;
    const Q = queries.length;

    let left = 0;
    let right = Q + 1;

    // check if all of nums is zero after processing target number of queries
    const good = (target) =>{
        const dif = Array(N + 1).fill(0);
        for(const [l, r, v] of queries.slice(0, target)){
            dif[l] += v;
            dif[r + 1] -= v;
        }
        let current = 0;
        for(let i = 0; i < N; i++){
            current += dif[i];
            if(current < nums[i]){
                return false; // if sum is less than num[i], this means not enough to subtract to make zero so false
            }
        }

       

        return true;
    }

    while(left < right){
        const mid = left + Math.floor((right - left) / 2);

        if(good(mid)){
            right = mid; // inclusive, try a less number of nth queries
        }else{
            left = mid + 1;
        }
    }

    if(left > Q){
        return -1;
    }
    return left;
};