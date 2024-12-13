/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const set = new Set();

    const que = new PriorityQueue({
        compare: (a, b) => {
            if(a[0] === b[0]){
                return a[1] - b[1]
            }

            return a[0] - b[0];
        }
    });

    for(let i = 0; i < nums.length; i++){
        que.enqueue([
            nums[i],
            i
        ]);
    }

    let score = 0;
    while(set.size !== nums.length){
        const [e, i] = que.dequeue();
        if(set.has(i)){
            continue;
        }

        score += e;
        if(i + 1 < nums.length){
            set.add(i + 1);
        }
        if(i - 1 >= 0){
            set.add(i - 1);
        }
        set.add(i);
    }

    return score;
};