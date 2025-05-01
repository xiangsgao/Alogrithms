/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 // couldnt solve because of the stupid helper functions
 // idea is to simulate the container shipment and see if you can ship on time
 // also made many bugs and mistakes for the low and high constraints
var shipWithinDays = function(weights, days) {
       
    
    const valid = (cap) =>{
        let count = 1;
        let cur = 0;
       
        for(const weight of weights){
            cur += weight;
            if (cur > cap){
                count += 1;
                cur = weight;
            }
        }
        return count <= days 
    }
    

    let low = Math.max(...weights);
    let high = weights.reduce((acc,e) => acc + e, 0);

    let res = days;
    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);

        if(valid(mid)){
            // search left for even less
            res = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    } 


    return res;
};