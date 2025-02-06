/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    
    const colors = {
        GREEN: 2,
        BLUE: 1,
        RED: 0
    }

    const N = costs.length;
    
    const map = new Map();

    const dfs = (i = 0, prev = -67) =>{
        
        if(i >= N){
            return 0; 
        }

        const key = `${i},${prev}`;
        if(map.has(key)){
            return map.get(key);
        }

        let min = Infinity;
        for(const color of Object.values(colors)){
            if(color === prev){
                continue;
            }

            min = Math.min(min, costs[i][color] + dfs(i + 1, color));
        }

        map.set(key, min);
        return min;
    }


    return dfs();


};