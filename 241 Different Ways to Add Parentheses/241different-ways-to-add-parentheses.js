/**
 * @param {string} expression
 * @return {number[]}
 */
 // idea is to place a paranthesis group everytime we see an operator.
 // all the parenthesis will go recursive for its subparanethsis 
 // all the numbers will have op perform and push to the res
 // combine two pointers with backtrack basically to generate all the possible outputs
var diffWaysToCompute = function(expression) {
    const ops = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y
    }

    const recursion = (left, right) =>{
        const res = [];

        for(let i = left; i < right + 1; i++){
            const op = expression[i];
            if(ops[op]){
                // this means op is an operator, place a parathsis group at the first half
                const nums1 = recursion(left, i - 1); // gets all the possible output of left
                // same things, place a paraenthesis group around 2nd half
                const nums2 = recursion(i + 1, right); // gets all the possible output of right
                 for(const n1 of nums1){
                    for(const n2 of nums2){
                        res.push(ops[op](n1, n2)); // perfom op on each of them
                    }
                }
            }
        }

        if(!res.length){
            res.push(Number(expression.substring(left, right + 1)));
        }
        return res;
    }

    return recursion(0, expression.length - 1);
};