/**
 * @param {number} n
 * @return {number}
 */
const powersOfTwo = new Set([
  1, 2, 4, 8, 16, 32, 64, 128, 256, 512,
  1024, 2048, 4096, 8192, 16384, 32768, 65536
]);
// the key is realizing the min operations is the minium addition to get to the next highest power of two or the minimum subtraction to get to the next lowest power of two, whichever is less
var minOperations = function(n) {
    
    if(powersOfTwo.has(n)){
        return 1;
    }

    // get the two nearest power of twos to n, one greater, one less
    // const list = [...powersOfTwo];
    // let high = -1;
    // let low = -1;
    // for(let i = 0; i < list.length; i++){
    //     if(list[i] > n){
    //         high = list[i];
    //         break;
    //     }
    // }

    // for(let i = list.length - 1; i>=0;i--){
    //     if(list[i] < n){
    //         low = list[i];
    //         break;
    //     }
    // }

    // Find nearest powers of two
    let high = Math.pow(2, Math.ceil(Math.log2(n)));  // Nearest power of two greater than or equal to n
    let low = Math.pow(2, Math.floor(Math.log2(n))); // Nearest power of two less than or equal to n

    const d1 = n - low; // how many subtraction we need to get to the next lowest power of 2
    const d2 = high - n; // how many addtiations we need to get to the next highest power of 2

    return 1 + Math.min(minOperations(d1), minOperations(d2));
};