/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    const RLen = robot.length;
    const FLen = factory.length;
    robot = robot.sort((a, b) => a - b);
    factory = factory.sort(([a], [b])=> a - b);

    const cache = new Map();
    const bruteForce = (rIdx = 0, fIdx = 0) =>{
        const key = `${rIdx},${fIdx}`;
        
        if(cache.has(key)){
            return cache.get(key);
        }

        if(rIdx >= RLen){
            return 0;
        }

        if(fIdx >= FLen){
            return Infinity;
        }

        const [fLocation, limit] = factory[fIdx];
        // facoty takes no robot
        let best = bruteForce(rIdx, fIdx + 1);


        // take up to the limit, brute for all the robot it takes
        for(let i = 1; i < limit + 1; i++){
            if(rIdx + i > RLen){
                break;
            }
            
            let cost = 0;
            for(let j = rIdx; j < rIdx + i; j++){
                cost += Math.abs(robot[j] - fLocation);
            }
           
            best = Math.min(best, cost + bruteForce(rIdx + i, fIdx + 1));
        }

        cache.set(key, best);
        return cache.get(key);
    }

    return bruteForce();
};