/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 // easy problem calls for easy solution.
 // you can do the Euclidean Algorithm but why???
var countOperations = function(num1, num2) {
    // let res = 0;
    // while(num1 && num2){
    //     if(num1 >= num2){
    //         num1 = num1 - num2;
    //     }else{
    //         num2 = num2 - num1;
    //     }
    //     res++;
    // }

    // return res;
    let res = 0; // total number of subtraction operations
    while (num1 && num2) {
        // each step of the Euclidean algorithm
        res += Math.floor(num1 / num2);
        num1 %= num2;
        // swap two numbers
        [num1, num2] = [num2, num1];
    }
    return res;
};