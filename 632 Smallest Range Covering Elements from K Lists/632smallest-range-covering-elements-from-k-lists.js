/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const k = nums.length;
    let left = nums[0][0];
    let right = nums[0][0];
    const heap = new PriorityQueue({
        compare: (a, b) =>{
            return a[0] - b[0];
        }
    });
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        left = Math.min(left, cur[0]);
        right = Math.max(right, cur[0]);
        heap.enqueue([cur[0], i, 0]);

    }

    let res = [left, right];

    while(true){
        let [nextVal, curIdx, curI] = heap.dequeue();
       
        curI += 1;
        nextVal = nums[curIdx][curI];
        if(nextVal === undefined){
            return res;
        }

        heap.enqueue([nextVal, curIdx, curI]);

        right = Math.max(right, nextVal);
        left = heap.front()[0];
        if(right - left < res[1] - res[0]){
            res = [left, right]
        }
    }

};