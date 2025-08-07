/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
 // the idea is to loop through 4 directions
 // keep going in that direction until the balls start
 // push that into the que as the starting point of the next bfs
var hasPath = function(maze, start, destination) {
   
   const stack = [start];

   const N = maze.length;
   const M = maze[0].length;

   const dir = [
    [0,1],[0,-1],[1,0],[-1,0]
   ];

   const stopped = new Set();

   while(stack.length){
        const [r, c] = stack.shift();

        if(r === destination[0] && c === destination[1]){
            return true;
        }

        for(const [dr, dc] of dir){
            let newR = r;
            let newC = c;

            // keep going in this direction until the balls hit one of the walls
            // simulating the ball keep rolling
            while(
                newR + dr >= 0 && 
                newR + dr <= N - 1 && 
                newC + dc >= 0 &&
                newC + dc <= M - 1 &&
                maze[newR + dr][newC + dc] === 0
            ){
                newR += dr;
                newC += dc;
            }
            // if we aready checked the cases when ball stop at this position 
            // this also prevents infinite loop
            const key = `${newR},${newC}`;
            if(stopped.has(key)){
                continue; 
            }else{
                stopped.add(key);
                stack.push([newR, newC]);
            }
        
        }
   }

    return false;

};


/**
    [
        [0,0,1,0,0],
        [0,0,0,0,0],
        [0,0,0,1,0],
        [1,1,0,1,1],
        [0,0,0,0,0]
    ]

 */