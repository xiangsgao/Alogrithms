/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    
    
    let streak = 0;
    for(let i = 0; i < arr.length; i++){
        const cur = arr[i];

        if(cur % 2 === 1){
            streak += 1;
        }else{
            streak = 0;
        }

        if(streak === 3){
            return true;
        }
    }

    return false;
};