/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {

    const map = new Map();
    for(let i = 0; i < positions.length; i++){
        map.set(positions[i], {index: i, health: healths[i], direction: directions[i]})
    }

    positions = [...map.keys()].sort((a, b) => a-b)
    
    const stack = []
    for(const pos of positions){
       const e = map.get(pos);
       if(e.direction === "R"){
        stack.push(e);
       }else{
            while(stack.length && stack[stack.length - 1].direction === "R" && e.health){
                const e2 = stack.pop();
                if(e.health > e2.health){
                    e.health -=1;
                    e2.health = 0;
                }else if(e.health < e2.health){
                    e.health = 0;
                    e2.health -= 1;
                    stack.push(e2);
                }else{
                    e.health = 0;
                    e2.health = 0;
                }
            }

            if(e.health){
                stack.push(e);
            }
       }
    }

    return [...map.keys()].sort((a, b) => map.get(a).index - map.get(b).index).map(e => map.get(e).health).filter(e => e);


};