/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
var promisePool = async function(functions, n) {
   let i = 0;
   const cb = async () =>{
        if(i === functions.length){
            return;
        }
        await functions[i++]();
        await cb();
   }


   await Promise.all(Array(n).fill().map(cb));
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */