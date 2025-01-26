/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
     
     const count = strs.map(e =>{
        const split = e.split("");
        const ones = split.filter(x => x === "1").length;
        const zeroes = split.filter(x => x === "0").length;
        return [ones, zeroes];
     });

     let res = -Infinity; 
     const map = new Map();
     
     const bruteForce = (i = 0, picked = 0, curM = 0, curN = 0) => {
      

        if(curM > m || curN > n){
            return;
        }
        
        if(i >= strs.length){
            res = Math.max(picked, res);
            return;
        }


        const key = `${i},${picked},${curM},${curN}`;
        if(map.has(key)){
            return map.get(key);
        }

        map.set(key, true);

        // two choices

        // include 
        const mIncrement = count[i][1]
        const nIncrement = count[i][0];
        bruteForce(i + 1, picked + 1, curM + mIncrement, curN + nIncrement);

        // exlucde
        bruteForce(i + 1, picked, curM, curN);
     }

     bruteForce();

     // 2^N ---> 

     return res === -Infinity ? 0 : res;
};  