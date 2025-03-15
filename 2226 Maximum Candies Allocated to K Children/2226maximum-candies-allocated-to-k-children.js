/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
 // failed to solve because not knowing koko eat bannana well enough
 // key is to figoure out the max num you can divide the candies first which is the sum / k.
var maximumCandies = function(candies, k) {
    const sum = candies.reduce((acc, e) => acc + e , 0);

    const maxPossible = Math.floor(sum / k);

    // binary search the possible
    const isPossible = (target) =>{
        let cur = 0;
        for(const num of candies){
            const toAdd = Math.floor(num / target);
            cur += toAdd;
        }
        return cur - k;
    }

    let left = 1;
    let right = maxPossible;

    let res = 0;
    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);

        if(isPossible(mid) >= 0){
            
            res = Math.max(res, mid);
            // look more right
            left = mid + 1;
        }else{
            // too many candies in a pile so not enough pile, make piles of less candies
            right = mid - 1;
        }
    }

    return res;
};