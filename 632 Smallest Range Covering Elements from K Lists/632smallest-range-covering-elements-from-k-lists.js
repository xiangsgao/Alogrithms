/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {

    let combined = nums.reduce((acc, e, i) => {
        const obj = e.map(e => ({val: e, arr: i}));
        return [...acc, ...obj];
    }, []);

    // combined has {val, arr} 
    combined.sort((a, b) => a.val - b.val);
    const N = nums.length;
    let left = 0;
    let range = null;
    const map = new Map(); // keep track of arrays seen so far
    for(let right = 0; right < combined.length; right++){
        const {val, arr} = combined[right];
        map.set(arr, (map.get(arr) ?? 0) + 1);
        while(map.size === N){
            const {val: leftVal, arr: leftArr} = combined[left++];
            map.set(leftArr, map.get(leftArr) - 1);
            if(map.get(leftArr) === 0){
                map.delete(leftArr);
            }
            if(range === null ){
                range = [leftVal, val];
            }else{
                const curRange = val - leftVal;
                const oldRange = range[1] - range[0];
                if(curRange < oldRange){
                    range = [leftVal, val];
                }
            }
        }
    }

    return range;

};


// var smallestRange = function(nums) {

//     const K = nums.length;
//     let left = nums[0][0];
//     let right = nums[0][0];
//     const pq = new PriorityQueue((a, b) => a[0] - b[0]);
//     for(let i = 0; i < K; i++){
//         const l = nums[i];
//         left = Math.min(left, l[0]);
//         right = Math.max(right, l[0]);
//         pq.enqueue([l[0], i, 0]);
//     }

//     let res = [left, right];

//     while(true){
//         const [n, i, idx] = pq.dequeue();
//         const newIdx = idx + 1;
//         if(newIdx === nums[i].length){
//             return res;
//         }
//         const newN = nums[i][newIdx];
//         pq.enqueue([newN,  i, newIdx]);
//         right = Math.max(right, newN);
//         left = pq.front()[0];
//         if(right - left < res[1] - res[0]){
//             res = [left, right];
//         }
//     }

// };