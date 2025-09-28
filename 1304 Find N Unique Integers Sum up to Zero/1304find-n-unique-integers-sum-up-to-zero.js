/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const total = [];
  let sum = 0;
  for(let i = n; i > 1; i--){
        total.push(i);
        sum += i;
  }  

  const remaining = 0 - sum;
  total.push(remaining);
  return total;
};