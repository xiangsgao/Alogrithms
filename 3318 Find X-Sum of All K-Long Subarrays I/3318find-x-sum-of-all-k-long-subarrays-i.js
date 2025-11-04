/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 /***
    easy to come up with solution but very error prone and tricky to code up. made so many bugs while coding up the solutions
 
  */
var findXSum = function(nums, k, x) {
    
    const map = new Map();
    const res = [];
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
        
        if(i >= k){
            map.set(nums[i - k], map.get(nums[i - k]) - 1);
            if(map.get(nums[i - k]) === 0){
                map.delete(nums[i - k]);
            }
        }

      
        
        if(i + 1 >= k){
            const que = new PriorityQueue((a, b) =>{
                if(a.cnt === b.cnt){
                    return b.val - a.val;
                }
                return b.cnt - a.cnt;
            });
            for(const [val, cnt] of map.entries()){
                que.enqueue({cnt, val});
            }
            
            let sum = 0;
            for(let i = 0; i < x; i++){
                if(que.isEmpty()){
                    break;
                }
                const {cnt, val} = que.dequeue();
                
                sum += cnt * val;
            }
            res.push(sum);
        }
    }

    return res;

};