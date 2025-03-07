/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }
    
    const cur = [];
    let res = [];
    for(let i = left; i <= right; i++){
        if(!isPrime(i)){
            continue;
        }
        if(cur.length !== 2){
            cur.push(i);
        }else{
            
            if(res.length !== 2 || ((res[1] - res[0]) > (cur[1] - cur[0]))){
                res = [...cur];
            }
            cur.shift();
            cur.push(i);
        }
    }

    if(cur.length === 2 && (res.length !== 2 ||  (res[1] - res[0]) > (cur[1] - cur[0]))){
        res = [...cur];
    }

    return res.length ? res : [-1, -1];
};