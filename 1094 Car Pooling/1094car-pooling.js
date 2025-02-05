/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {

    trips = trips.sort((a, b) => a[1] - b[1]);
    console.log({trips})
    let cur = 0;
    const stack = new PriorityQueue({
        compare: (a, b) => a[1] - b[1] 
    });
    for(let i = 0; i < trips.length; i++){
        const [n, from, to] = trips[i];
        while(!stack.isEmpty() && from >= stack.front()[1]){
            const [drop] = stack.dequeue();
            cur -= drop;
        }
       
        cur += n;
        if(cur > capacity){
            
            return false;
        }

        stack.enqueue([n, to]);
    }


    return true;
};  