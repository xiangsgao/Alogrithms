/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */

 // coundnt solve because not realizing we can start with the black cell and then find all the 2x2 this black cell is a part of and then increment the count of those 2x2. coding this up is very tricky actually, espcially for checking out of bound. you also need to realize the total number of 2x2 in the grid is (x - 1) * (y - 1)
var countBlackBlocks = function(m, n, coordinates) {
    const map = new Map();
    for(const [x, y] of coordinates){

       // if this black cell is the last cell in the gird 
       if(x === m - 1 && y === n - 1){
            const key = `${x - 1},${y - 1}`;
            map.set(key, (map.get(key) ?? 0) + 1);
       }else if (y === n - 1){
            // if this black cell is in the last column
            let key = `${x},${y - 1}`;
            map.set(key, (map.get(key) ?? 0) + 1 );
            key = `${x - 1},${y - 1}`;
            map.set(key, (map.get(key) ?? 0) + 1 );
       }else if(x === m - 1){
            // if this black cell is in the last row
            let key = `${x - 1},${y}`;
            map.set(key, (map.get(key) ?? 0) + 1 );
            key = `${x - 1},${y - 1}`;
            map.set(key, (map.get(key) ?? 0) + 1 );
       }else{
            // for all the other cells
            let key = `${x - 1},${y}`;
            map.set(key, (map.get(key) ?? 0) + 1 );
            key = `${x - 1},${y - 1}`;
            map.set(key, (map.get(key) ?? 0) + 1 );
            key = `${x},${y - 1}`;
            map.set(key, (map.get(key) ?? 0) + 1 );
            key = `${x},${y}`;
            map.set(key, (map.get(key) ?? 0) + 1 );
       }

       // not that some key might be out of bound but it doesnt matter, we will eliminate them in the next step
    }

    let sum = 0;
    const res = [];
    for(const [cell, nBlacks] of map.entries()){
        const [x, y] = cell.split(",").map(e => Number(e)); 
        if(x >= 0 && y >= 0){ // if not out of bound
            res[nBlacks] = (res[nBlacks] ?? 0) + 1;
             sum += 1;
        }
    }

   
    for(let i = 0; i < 5; i++){
        res[i] = res[i] ?? 0;
    }

    // total 2x2 is (m - 1) * (n - 1)
    res[0] = (m - 1) * (n - 1) - sum;

    return res;
};