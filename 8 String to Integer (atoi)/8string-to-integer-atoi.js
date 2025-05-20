/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const map = {
        "0" : 0,
        "1":  1,
        "2" : 2,
        "3" : 3,
        "4" : 4,
        "5" : 5,
        "6" : 6,
        "7" : 7,
        "8" : 8,
        "9" : 9
    } 
    
    s = s.trim().split("");
    // get rid of the char
    const charIdx = s.findIndex((e, i) => {
       
        if(i === 0 && (e === "+" || e === "-")){
            
            return false;
        }
        return map[e] === undefined;
    });
    
    if(charIdx >= 0){
        s = s.slice(0, charIdx);
    }
    
    let power = 1;
    let res = 0;
    for(let i = s.length - 1; i >= 0; i--){
        const cur = s[i];

       
        if(cur === "+"){
            continue;
        }

        if(cur === "-"){
            res *= -1;
        }else{
            const digit = map[cur];
            res += digit * power;
        }
       

        power *= 10;
    }

    const max = Math.pow(2, 31) - 1;
    const min = -1 * Math.pow(2, 31);

    if(res > max){
        return max;
    }

    if(res < min){
        return min;
    }
    return res;

};