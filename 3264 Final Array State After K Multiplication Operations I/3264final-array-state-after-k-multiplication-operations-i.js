/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {


    const heap = new PriorityQueue({
        compare: (objA, objB) => {
            if(objA.value === objB.value){
                return objA.index - objB.index;
            }else{
                return objA.value - objB.value
            }
        } 
    });
    for(let i = 0; i < nums.length; i++){
        heap.enqueue({index: i, value: nums[i], original: nums[i]});
    }

    for(let i = 0; i < k; i++){
        const e = heap.dequeue();
        e.value *= multiplier;
        heap.enqueue(e);
    }
    const retval = heap.toArray().sort(({index: indexA}, {index: indexB}) => indexA - indexB).map(({value}) => value);
    return retval;

};