/**
 * @param {number} n
 * @return {boolean}
 */
 // cant solve because not realizing the growth property of power to come to a greedy. should be able to do the recrusion tho
var checkPowersOfThree = function(n) {
   let i = 0;

   while(Math.pow(3, i + 1) <= n){
        i+=1;
   }
    
   while(i >= 0){
    const power = Math.pow(3, i);
    if(power <= n){
         n -= power;
    }
   
    i -= 1;
   }

   
    return n === 0;
};