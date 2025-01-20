/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    
    const M = isWater.length;
    const N = isWater[0].length;
    const stack = [];
    const visited = new Set();
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(isWater[i][j] === 1){
                stack.push([0, i, j]);
                isWater[i][j] = 0;
                visited.add(`${i},${j}`)
            }
        }
    }
   
   
    while(stack.length){
        const [h, r, c] = stack.shift();
        const neighbors = [
            [r + 1, c],
            [r - 1, c],
            [r, c + 1],
            [r, c - 1]
        ];

        for(const [newR, newC] of neighbors){
            const curKey = `${newR},${newC}`;
            if(isWater[newR]?.[newC] === undefined || visited.has(curKey)){
                continue;
            }
            visited.add(curKey);
            const curH = h + 1;
            isWater[newR][newC] = curH;
            stack.push([curH, newR, newC]);
        }
    }

    return isWater;

};