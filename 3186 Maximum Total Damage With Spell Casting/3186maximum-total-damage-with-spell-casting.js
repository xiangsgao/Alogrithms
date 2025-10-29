/**
 * @param {number[]} power
 * @return {number}
 */
 /**
    my solution got TLE
    idea is that notice that the spell you can cast will never overlap since left and right are all -2 and +2.
    This means we can count the frequency after ordering them and use that to get the max spell we can cast at the moment 
  */
var maximumTotalDamage = function(power) {

    const sorted = power.sort((a, b) => a - b)
    const map = new Map();

    for(const x of sorted){
        map.set(x, (map.get(x) ?? 0) + 1);
    }

    const set = [...(new Set(sorted))];

    const N = set.length;

    const dp = Array(N).fill(0);
    let mx = 0;
    let j = 0;
    for(let i = 0; i < N; i++){
        while(j < i && set[j] < set[i] - 2){
            mx = Math.max(mx, dp[j]); // max will always be a max spells less than set[i] - 2, if we dont keep track of this then it is a double for loop to keep looking back at the dp
            j++;
        }
        dp[i] = mx + set[i] * map.get(set[i]);
    }

    return Math.max(...dp);
}