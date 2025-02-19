/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */

 // cant solve because i dont realize L and R can move around through X but can never cross. Also, cant figoure out how to code up with this information
var canTransform = function(start, result) {
   const N = start.length;

   let count = 0;

   for(let i = 0; i < N; i++){
        if(start[i] === "X"){
            count++;
        }

        if(result[i] === "X"){
            count--;
        }
   }

   // check if we have the same number of X, if not, no way we can transform to result
   if(count !== 0){
        return false;
   }


   let i = 0;
   let j = 0;

   while(i < N && j < N){
     // skip the x, they no matter
     while(i < N && start[i] === "X"){
        i++;
     }

     while(j < N && result[j] === "X"){
        j++;
     }

     // i and j are the indices representing the next
     // occurrences of non-X characters, see if the two can be swap to match the result

     // if both reach the end, gotta be true, else if one reach the end, false
     if (i == N || j == N){
        return i == N && j == N;
     }

        if(start[i] !== result[j]){
            return false;
        }
        
        // L can only move left
        if(start[i] === "L" && i < j){
            return false;
        }

        // R can only move right
        if(start[i] === "R" && i > j){
            return false;
        }

     i++;
     j++;
                
   }

    return true;
   
};