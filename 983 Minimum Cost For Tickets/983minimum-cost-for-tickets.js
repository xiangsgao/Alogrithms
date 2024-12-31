/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
const dp = new Map();

    const bf = (passExpire = 0, i = 0) =>{
      
        if(i >= days.length){
            return 0;
        }

        const key = `${passExpire},${i}`;

        if(dp.has(key)){
            return dp.get(key);
        }

        const day = days[i];
        
        if(passExpire < day){
            dp.set(key, Math.min(
                costs[0] + bf(day, i + 1),
                costs[1] + bf(day + 6, i + 1),
                costs[2] + bf(day + 29, i + 1)
            ));
        }else{
            dp.set(key, bf(passExpire, i + 1));
        }

        return dp.get(key);
    }


    return bf();
};