/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
 // cant solve because not understanding modular arithmetic 
var cleanRoom = function(robot) {
    const dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    const visited = new Set();

    const goBack = ()=> {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }

    const recursion = (x,y,curDir) =>{
        const key = `${x},${y}`;
        visited.add(key);
        robot.clean();

        for(let i = 0; i < 4; i++){
            const newDir = (curDir + i) % 4; // i is number of clockwise turn  
            const [incrX, increY] = dir[newDir];
            const [newX, newY] = [incrX + x, increY + y];

            if(!visited.has(`${newX},${newY}`) && robot.move()){
                recursion(newX, newY, newDir);
                goBack();
            }

            robot.turnRight();
        }

    }

    recursion(0, 0, 0);
};

/***
    [1,1,1,1,1,0,1,1],
    [1,1,1,1,1,0,1,1],
    [1,0,1,1,1,1,1,1],
    [0,0,0,1,0,0,0,0],
    [1,1,1,1,1,1,1,1]


 */