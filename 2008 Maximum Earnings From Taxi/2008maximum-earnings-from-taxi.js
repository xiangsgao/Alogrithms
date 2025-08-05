/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */

 // didnt solve because did not realize the first next passenger that satisfied the conditions is the one you need to pick up. realize it doesnt matter which passenger it is as long as it satifies the condition because the recursions handles the all the skip cases
var maxTaxiEarnings = function(n, rides) {
    
    rides = rides.sort((a, b) =>{
        return a[0] - b[0];
    });

    const binarySearch = (i, curEnd) =>{
      
        let left = i;
        let right = rides.length - 1;
        let mostLeft = rides.length;
        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);
            if(rides[mid][0] >= curEnd){
                mostLeft = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return mostLeft;
    }

    const cache = new Map();
    const backtrack = (i = 0) =>{
        const key = i;

        if(i >= rides.length){
            return 0;
        }

        if(cache.has(key)){
            return cache.get(key);
        }

        
        const [curStart, curEnd, tip] = rides[i];



        // skip the current
        let answer = backtrack(i + 1);
        // dont skip the current, need to find the next passenger to pick up, binary search this
        const j = binarySearch(i + 1, curEnd);
        // max of skip and not skip
        answer = Math.max(answer, curEnd - curStart + tip + backtrack(j));
        
        cache.set(key, answer);
        return answer;
    }

    return backtrack();

};