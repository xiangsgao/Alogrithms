/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
 // key is to count the frequency to get "groups " and then do dp to get all the string that meet the requirement of at least k
 // then ask can we take 1, 2, 3, ... from group 1, group 2 etc 
 // all choices is then groups x groups x groups...
 // use dp to eliminate invalid strings which are tabulated with length of string and length of groups. what ways you can take groups of length x with string of length y
 // still dont understand the solution
 // js mod is doing its issues
// var possibleStringCount = function(word, k) {
//     const MOD = Math.pow(10, 9) + 7;
//     const n = word.length;
//     const groups = [];

//     let res = 1;
//     let cnt = 1;

//     // count freuency into groups
//     for(let i = 1; i < n; i++){
//         if(word[i] === word[i - 1]){
//             cnt+=1;
//         }else{
//             groups.push(cnt);
//             res = (res * cnt) % MOD;
//             cnt = 1; 
//         }
//     }

//     groups.push(cnt);

//     res = (res * cnt) % MOD;

//     if(k <= groups.length){
//         return res;
//     }

//     const dp = Array(groups.length + 1).fill().map(() => Array(k).fill(0));

//     dp[0][0] = 1;

//     for(let i = 1; i < groups.length + 1; i++){
//         const pref = Array(k).fill(0);
//         pref[0] = dp[i - 1][0];
//         for(let idx = 1; idx < k; idx++){
//             pref[idx] = pref[idx - 1] + dp[i - 1][idx];
//         }
//         for(let j = 1; j < k; j++){
//            let left = j - 1 - groups[i - 1];
//            let pre_s = pref[j-1];
//            if(left >= 0){
//             pre_s -= pref[left];
//            }
//            dp[i][j] = pre_s;
//         }
//     }

//     return (res - dp.at(-1).reduce((acc, e) => acc + e, 0)) % MOD


// };

var possibleStringCount = function(word, k) {
    const MOD = 1e9 + 7;
    const n = word.length;
    const groups = [];

    let res = 1;
    let cnt = 1;

    // count frequency into groups
    for(let i = 1; i < n; i++){
        if(word[i] === word[i - 1]){
            cnt+=1;
        }else{
            groups.push(cnt);
            res = (res * cnt) % MOD;
            cnt = 1; 
        }
    }
    groups.push(cnt);
    res = (res * cnt) % MOD;

    // length of string less than the frequency groups 
    if(k <= groups.length){
        return res;
    }

    const dp = Array(groups.length + 1).fill().map(() => Array(k).fill(0));
    dp[0][0] = 1;

    for(let i = 1; i <= groups.length; i++){
        const pref = Array(k).fill(0);
        pref[0] = dp[i - 1][0];
        for(let idx = 1; idx < k; idx++){
            pref[idx] = (pref[idx - 1] + dp[i - 1][idx]) % MOD;
        }
        for(let j = 1; j < k; j++){
            let left = j - 1 - groups[i - 1];
            let pre_s = pref[j - 1];
            if(left >= 0){
                pre_s = (pre_s - pref[left] + MOD) % MOD;
            }
            dp[i][j] = pre_s;
        }
    }

    const badWays = dp.at(-1).reduce((acc, e) => (acc + e) % MOD, 0);
    return ( (res - badWays + MOD) % MOD );
};