/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) {
    
    const yMap = new Map();
    const xMap = new Map();

    for(const [x, y] of buildings){
        const sameX = xMap.get(x) ?? new PriorityQueue((a, b) => a - b);
        const sameY = yMap.get(y) ?? new PriorityQueue((a, b) => a - b);

        sameX.enqueue(y);
        sameY.enqueue(x);

        xMap.set(x, sameX);
        yMap.set(y, sameY);
    }

    let res = 0;

    for(const [x, y] of buildings){
        let left = false;
        let right = false;
        let top = false;
        let bottom = false;
        // check left and right 
        const [leftMost, rightMost] =  [yMap.get(y).front(), yMap.get(y).back()];
        if(leftMost < x){
            left = true;
        }

        if(rightMost > x){
            right = true;
        }
        

        // check top and bottom 
         const [topMost, bottomMost] =  [xMap.get(x).front(), xMap.get(x).back()];
         if(topMost < y){
            top = true;
         }

         if(bottomMost > y){
            bottom = true;
         }


        if(left && right && top && bottom){
            res += 1;
        }
    }

    return res;

};