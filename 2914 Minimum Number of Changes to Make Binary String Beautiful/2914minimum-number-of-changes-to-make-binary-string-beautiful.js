/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {

   let l = 0;
   let res = 0;

   for(let r = 0; r < s.length; r++){
        if(s[l] !== s[r]){
            if(r % 2 === 1){
                res++;
            }
            l = r;
        }
   }

   return res;
};