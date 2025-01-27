/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // failed to realize that optimal play can be think of player one adds to the score and player two subtracts from the score
 // the most optimal play for player one is whichever choice maximize the score, the most optimal play for player two is whichever choice minimize the score.
var predictTheWinner = function(nums) {
    const map = new Map();
    const dfs = (pO = true, left = 0, right = nums.length - 1) =>{
        if(left > right){
            return 0;
        }

        const key = `${pO},${left},${right}`;
        if(map.has(key)){
            return map.get(key);
        }

        const negation = pO ? 1 : -1; // player one adds to the score, player two substracts from the score
        // picked left
        const leftScore = (negation * nums[left]) + dfs(!pO, left + 1, right);


        // picked right
        const rightScore = (negation * nums[right]) + dfs(!pO, left, right - 1);

        // player one wants to maxmize the score, player two wants to minimize the score
        let res = null;
        if(pO){
            res = Math.max(leftScore, rightScore);
        }else{
            res = Math.min(leftScore, rightScore);
        }
        map.set(key, res);
        return res;
    }

    const res = dfs();
    return res >= 0;



};