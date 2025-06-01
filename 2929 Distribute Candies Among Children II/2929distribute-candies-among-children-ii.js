/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
 // math questions, i hate math questions.
 // idea is to fixed the child 1 candies. 
 // remaining child 2 and 3 can be calculated by figouring what is the minimum candies that child 2 can take and the max that child 2 can take such that child 3 wont go above the limit
 // not that child 3 = remainging  - child 2
 // and child 3 <= limit
 // so remaining - child 2 <= limit
 // do some algebra with the above and you get child 2 >= remaining - limit
 // now we do the minimum and the maximum possible candies to give child 2
 // once child 2 is fixed, child three will be fixed as well
 // we can then just add the number of ways to distribute child 2 to the res
var distributeCandies = function(n, limit) {
    
    if(limit * 3 < n){
        return 0;
    }

    let res = 0;
    
    for(let c1 = 0; c1 < Math.min(n, limit) + 1; c1++){
        const remaining = n - c1;
        if(remaining < 0){
            continue; // not possile
        }

        const minC2 = Math.max(0, remaining - limit);

        const maxC2 = Math.min(limit, remaining);

        if(maxC2 >= minC2){
            res += maxC2 - minC2 + 1;
        }

    }

    return res;
}
