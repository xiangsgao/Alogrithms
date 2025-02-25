/**
 * @param {number[]} arr
 * @return {number}
 */
 // failed to solve because did not realize odd + even is always odd. even plus even is always even and odd plus odd is always even
var numOfSubarrays = function(arr) {
    

    let sum = 0;
    let even = 0;
    let odd = 0;
    let res = 0;
    for(const n of arr){
        sum += n;
        if(sum % 2 !== 0){
            odd += 1; // increment the count of odd sum
            res += 1; // plus one for the cur sum
            res += even; // odd plus even is odd so increment by the previous even sums
        }else {
            even += 1; // increment the count of even sum
            // even plus odd is odd so plus the previous odd sum
            res += odd; 
        }
    }

     

    return res % (Math.pow(10, 9) + 7);
};