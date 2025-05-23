/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
 // intution is difficult
 // the take away is that x ^ y = z and z ^ y will get you back x
 // this means if you xor a node twice, it just goes back to itself so you need to choose which to xor and which to keep the same. you can do this by using a delta array which is the difference between the orginal and product of its xor. note this realization also means you can literally xor any two node, even if they are not connected. this means you be greedy and keep picking the top two nodes to add to the res;
var maximumValueSum = function(nums, k, edges) {
    const delta = nums.map(e => (e ^ k) - e).sort((a, b) => b - a);

    let res = nums.reduce((acc, e) => acc + e, 0);

    for(let i = 0; i < nums.length; i+=2){
        if(i === nums.length - 1){
            break;
        }
        const pathDelta = delta[i] + delta[i + 1];
        if(pathDelta <= 0){
            break;
        }
        res += pathDelta;
    }

    return res;
};