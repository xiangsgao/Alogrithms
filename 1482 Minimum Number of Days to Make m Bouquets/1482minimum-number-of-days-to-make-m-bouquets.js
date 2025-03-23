/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    // const minHeap = PriorityQueue((a, b) => {
    //     return a - b;
    // });

    // const N = bloomDay.length;
    // while(m > 0){

    // }

    const N = bloomDay.length;

    if(N < m * k){
       
        return -1;
    }
    


    const enoughFlowersForToday = (days) =>{
        let streak = 0;
        let res = 0;
        for(let i = 0; i < bloomDay.length; i++){
            const isBloomed = Math.floor(days / bloomDay[i]) !== 0;

            if(isBloomed){
                streak++;
            }else{
                streak = 0;
            }

            if(streak === k){
                res += 1;
                streak = 0;
            }
        }
        
        return res >= m;
    }


    let low = 1;
    let high = Math.max(...bloomDay);
    let min = -1;
    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);

        if(enoughFlowersForToday(mid)){
            min = mid;
            // see if even lower
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return min; // shouldnt hit here
};