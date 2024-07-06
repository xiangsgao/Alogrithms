/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    
    if(time < n){
        return time + 1;
    }

    let starting = 1;
    let forward = true;
    while(time !== 0){
        if(forward){
            starting +=1;
            if(starting === n){
                forward = false;
            }
        }else{
            starting -= 1;
            if(starting === 1){
                forward = true;
            }
        }

        time--;
    }

    return starting;


};