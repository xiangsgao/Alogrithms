/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
   



    let f = false;
    let s = false;
    let t = false;
    const [x1, y1, z1] = target;
    for(const [x, y, z] of triplets){
        
        if(x > x1 || y > y1 || z > z1){
            continue;
        }
        const first = x === x1;
        const second = y === y1;
        const third = z === z1;
        f = f || first;
        s = s || second;
        t = t || third;
    
    }

    return f && s && t;
};