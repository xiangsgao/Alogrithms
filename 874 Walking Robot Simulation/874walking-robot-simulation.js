/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */


const getNewDir = (dir, command) =>{
    switch(dir){
        case "up": return command === -1 ? "right" : "left"
        case "left": return command === -1 ? "up" : "down"
        case "right": return command === -1 ? "down" : "up"
        case "down": return command === -1 ? "left" : "right"
    }
}

const blockByObstacles = ([originalX, originalY], [newX, newY], obstacles) =>{
    let filter = obstacles.filter(([x, y]) => {
        const sameX = x === originalX;
        const sameY = y === originalY;
        if(sameX){
            return (y >= originalY && y <= newY) || (y <= originalY && y >= newY)
        }

        if(sameY) {
             return (x >= originalX && y <= newX) || (x <= originalX && x >= newX)
        } 
    }).map(([x, y]) => `${x},${y}`);

    filter = new Set(filter);

    while(originalX !== newX){
        const temOriginalX = originalX < newX ? originalX + 1 : originalX - 1;
        if(filter.has(`${temOriginalX},${originalY}`)){
            return [originalX, originalY];
        }
        originalX = temOriginalX;
    }

    while(originalY !== newY){
        const temOriginalY = originalY < newY ? originalY + 1 : originalY - 1;
        if(filter.has(`${originalX},${temOriginalY}`)){
            return [originalX, originalY];
        }
        originalY = temOriginalY;
    }

    return [originalX, originalY];

}

const getNewCords = (x, y, command, dir, obstacles) =>{
    switch(command){
        case -1: return [x, y, getNewDir(dir, command)];
        case -2: return [x, y, getNewDir(dir, command)];
        default:{
            if(dir === "up"){
                return [...blockByObstacles([x, y], [x, y + command], obstacles), dir];
            }
            if(dir === "down"){
                return [...blockByObstacles([x, y], [x, y - command], obstacles), dir]
            }
            if(dir === "left"){
                 return [...blockByObstacles([x, y], [x - command, y], obstacles), dir]
            }
            if(dir === "right"){
                 return [...blockByObstacles([x, y], [x + command, y], obstacles), dir]
            }
        }
    }
}


var robotSim = function(commands, obstacles) {
    let x = 0;
    let y = 0;
    let dir = "up"
    let longest = 0;
    for(const command of commands){
        const [newX, newY, newDir] = getNewCords(x, y, command, dir, obstacles);
        x = newX;
        y = newY;
        dir = newDir;
        const sX = Math.pow(x, 2);
        const sY = Math.pow(y, 2);
        if(sX + sY > longest){
            longest = sX + sY;
        }
    }

    return longest;

};