/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */

 // failed to solved because check the comments, mostly i can't come up with all the possible sides

 const getDis = ([x, y], [x2, y2]) =>{
    return Math.pow(x - x2, 2) + Math.pow(y - y2, 2); // if distsance is the same, square of the distance is also the same, no need for square root
 }
var validSquare = function(p1, p2, p3, p4) {
     
   const sideLens = [
        getDis(p1,p2),
        getDis(p1,p3),
        getDis(p1,p4),
        getDis(p2,p3),
        getDis(p2,p4), 
        getDis(p3,p4), // all 6 possible sides, 4 outer plus the two diagonals
   ];

   const map = new Map();
     
   for(const side of sideLens){
        if(side === 0){
            // if the two points are the same, this is an edge case
            return false;
        }
        map.set(side, (map.get(side) ?? 0) + 1);
   }

   if(map.size !== 2){
        return false; // a square can only have two differing sides, the outer and its diagonal. the diagonal will always be longer than the outer side becuase of a^2 + b^2 = c^2. this means the map will have only two keys if it is a square and count will be 4 and 2.

   }

    const [side] = map.values();

    console.log({map})

    return side === 4 || side === 2; // just need to make sure one of them is either.
};