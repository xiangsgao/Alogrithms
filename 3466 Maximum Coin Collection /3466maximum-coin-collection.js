/**
 * @param {number[]} lane1
 * @param {number[]} lane2
 * @return {number}
 */
var maxCoins = function(lane1, lane2) {
    const LEN = lane1.length;
    const memo = new Map();

    const dfs = (i, leftLane, laneChanges) => {
        if (i >= LEN) return 0;
        if(laneChanges < 0){
            return -Infinity;
        }

        const curPoints = leftLane ? lane1[i] : lane2[i]; 

        const key = `${i}-${leftLane}-${laneChanges}`;
        if (memo.has(key)) return memo.get(key);

        const max = Math.max(
            curPoints + dfs(i + 1, leftLane, laneChanges), // stay at the lane
            dfs(i, !leftLane, laneChanges - 1), // switch lane
            curPoints // exit here
        );
    
        memo.set(key, max);
        return max;
    }

    let maxCoins = -Infinity;
    for (let start = 0; start < LEN; start++) {
        maxCoins = Math.max(maxCoins, dfs(start, true, 2));
    }

    return maxCoins;
};