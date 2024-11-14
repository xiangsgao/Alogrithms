/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    let stored = [];
    const maxFnLength = fn.length;
   
    return function curried(...args) {
        stored = [...stored, ...args];
        if(stored.length >= maxFnLength){
            return fn(...stored);
        }

        return curried;
    }
};

//   function sum(a, b) { return a + b; }
//   const csum = curry(sum);
//   csum(1)(2) // 3

/**
  function sum(a, b) { return a + b; }
  const csum = curry(sum);
  csum(1)(2) // 3
 */
