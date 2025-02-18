/**
 * @param {string} pattern
 * @return {string}
 */
 // got the brute force but not the greedy
var smallestNumber = function(pattern) {
   const res = [];
   const stack = [];

   for(let i = 0; i < pattern.length + 1; i++){
        stack.push(i + 1);

        while(stack.length && ((i === pattern.length) || pattern[i] === "I")){
            res.push(stack.pop().toString());
        }
   }

   return res.join("");
}