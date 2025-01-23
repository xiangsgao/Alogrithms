/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const M = triangle.length;
    
    /**
          2           
         3 4
        6 5 7  
       4 1 8 3 <---- only 
        loop through all rows, add the smallest number. then return the sum
    */

    const map = new Map();

    const bruteForce = (i = 0, prevJ = 0) =>{

        if(i === M - 1){
            return Math.min(triangle[i][prevJ] ?? Infinity, triangle[i][prevJ + 1] ?? Infinity);
        }


        const key = `${i}, ${prevJ}`;

        if(map.has(key)){
            return map.get(key);
        }


        // pick either the prevJ 
        const preJSum = triangle[i][prevJ] + bruteForce(i + 1, prevJ);

        // or the prevJ + 1 
        const preJSumPlus = (triangle[i][prevJ + 1] ?? Infinity) + (bruteForce(i + 1, prevJ + 1) ?? Infinity);
        const retval = Math.min(preJSum, preJSumPlus);

        map.set(key, retval);

        return retval;

    }

    const res = bruteForce();
   
    return res;

};