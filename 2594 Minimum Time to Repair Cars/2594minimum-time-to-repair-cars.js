/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
 // failed to solve because couldnt realize i can use min heap to pick on the next mechanic optimally to fix the next car. bigger problem is that did realize that mechanics who are the same rank can be group together in the min heap.
var repairCars = function(ranks, cars) {

    const map = new Map();
    for(const r of ranks){
        map.set(r, (map.get(r) ?? 0) + 1);
    }

    const pq = new PriorityQueue(([a], [b]) =>{
        return a - b;
    });


    for(const r of map.keys()){
        const time = r;
         // Elements: [time, rank, cars_repaired, mechanic_count], same rank mechanics could be more than 1
        pq.enqueue([time, r, 1, map.get(r)]); // time to fix next car, nth cars to fix, rank
    }

    let res = 0;
    while(cars > 0){
        const [time, rank, carsRepaired, mechanicCount] = pq.dequeue();
        res = Math.max(time, res);
        cars -= mechanicCount;
        const newCarsRepaired = carsRepaired + 1; 
        const newTime = rank * newCarsRepaired * newCarsRepaired;
        pq.enqueue([newTime, rank, newCarsRepaired, mechanicCount]);
    }

    return res;
};