/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */

 // more optimized is two pointers, figoure out which id is the least, add it and advance that pointer. if both equal, advance both pointers.
var mergeArrays = function(nums1, nums2) {

    const map = new Map();
    let one = 0;
    let two = 0;
    while(true){
        const cur1 = nums1[one];
        const cur2 = nums2[two];

        if(!cur1 && !cur2){
            break;
        }

        if(cur1){
            const curList = map.get(cur1[0]) ?? [];
            curList.push(cur1);
            map.set(cur1[0], curList);
        }

        if(cur2){
            const curList = map.get(cur2[0]) ?? [];
            curList.push(cur2);
            map.set(cur2[0], curList);
        }

        one++;
        two++;
    }

    const res = [];
    for(const key of [...map.keys()].sort((a,b) => a - b)){
        const [one, two] = map.get(key);
        res.push([key, one[1] + (two?.[1] ?? 0)])
    }

    return res;
};