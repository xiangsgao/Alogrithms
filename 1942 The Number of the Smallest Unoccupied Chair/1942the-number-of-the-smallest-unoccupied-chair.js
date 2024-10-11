/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    const arrivals = times.map((e, i) => [i, e]).sort(([_, [a]], [__, [b]]) => a - b);
    const leaves = times.map((e, i) => [i, e]).sort(([_, [__, a]], [___, [____, b]]) => a - b);


    let chairs = times.map(() => null);

    let ticks = arrivals[0][0];
    let arrival = 0;
    let leave = 0;
    const assignChair = new Map();
    

    while(true){
        const [aFi, [at]] = arrivals[arrival];
        let [lFi, [_, lt]] = leaves[leave];

        while(ticks === lt){
            const chairsI = assignChair.get(lFi);
            chairs[chairsI] = null;
            leave += 1;
            assignChair.delete(lFi);
            lFi = leaves[leave][0];
            lt = leaves[leave][1][1];
        }

        if(ticks === at){
            const lastIndex = chairs.indexOf(null);
            chairs[lastIndex] = aFi;
            if(aFi === targetFriend){
                return lastIndex;
            }
            assignChair.set(aFi, lastIndex);
            arrival += 1;
        }
        
        ticks = Math.min(arrivals[arrival][1][0], leaves[leave][1][1]);
    }
};