// /**
//  * @param {number[][]} edges
//  * @param {number} bob
//  * @param {number[]} amount
//  * @return {number}
//  */

//  // cant solve because failied to realize this is tree which means no cycle which means bob only has one path to reach the node. also, i am just freaking lazy for this problem. also, js solution did not work even though it was o(n);
// var mostProfitablePath = function(edges, bob, amount) {
//     const map = new Map();

//     for(const [from, to] of edges){
//         const cur1 = map.get(from) ?? [];
//         cur1.push(to);
//         map.set(from, cur1);
//         const cur2 = map.get(to) ?? [];
//         cur2.push(from);
//         map.set(to, cur2);
//     }

//     const bobTime = new Map();
    
//     const dfs = (src, parent, time) =>{
//         if(src === 0){
//             bobTime.set(src, time);
//             return true;
//         }

//         for(const n of map.get(src)){
//             if(n === parent){
//                 continue;
//             }
//             const res = dfs(n, src, time + 1);
//             if(res){
//                 bobTime.set(src, time);
//                 return true;
//             }
//         }

//         return false;

//     }

//     dfs(bob, -1, 0);

//     const aliceTime = new Map();

//     const stack = [[0, 0, -1, amount[0]]]; // node, time, parent, total profit
//     let res = -Infinity;
//     while(stack.length){
//         const [n, t, p, tp] = stack.shift();

//         let isLeaf = true;
//         for(const nei of map.get(n)){
//             if(nei === p){
//                 continue;
//             }

//             isLeaf = false;
//             let profit = amount[nei];
//             if(t + 1 === bobTime.get(nei)){
//                 profit /= 2;
//             }

//             if(t + 1 > (bobTime.get(nei) ?? Infinity)){
//                 profit = 0;
//             }

//             stack.push([nei, t + 1, n, tp + profit])

//              if(map.get(nei).length === 1){
//                 res = Math.max(tp + profit, res);
//              }
//         }
//     }

//     return res;

// };


var mostProfitablePath = function (edges, bob, amount) {
    const n = amount.length;
    const graph = Array.from({ length: n }, () => []); 
    // Step 1: Construct adjacency list for the tree
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    // Step 2: Find the exact path of Bob from `bob` to `0`
    let bobTime = Array(n).fill(Infinity);
    let bobPath = new Map();
    function findBobPath(node, parent, depth) {
        bobPath.set(node, depth);
        if (node === 0) return true;
        for (const neighbor of graph[node]) {
            if (neighbor !== parent && findBobPath(neighbor, node, depth + 1)) {
                return true;
            }
        }
        bobPath.delete(node);
        return false;
    }
    findBobPath(bob, -1, 0);

    // Mark Bob's reach time from his path
    bobTime = Array(n).fill(Infinity);
    let time = 0;
    for (const [node, t] of bobPath.entries()) {
        bobTime[node] = t;
    }
    let maxIncome = -Infinity;
    // Step 3: DFS for Alice to find the most profitable path
    function dfsAlice(node, parent, currTime, income) {
        // Case 1: Alice reaches first -> Full reward
        if (currTime < bobTime[node]) {
            income += amount[node];
        }
        // Case 2: Both reach at the same time -> Half reward
        else if (currTime === bobTime[node]) {
            income += amount[node] / 2;
        }
        // Case 3: Bob reaches first -> No reward
        let isLeaf = true;
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                isLeaf = false;
                dfsAlice(neighbor, node, currTime + 1, income);
            }
        }

        // If it's a leaf, update maxIncome
        if (isLeaf) {
            maxIncome = Math.max(maxIncome, income);
        }
    }
    dfsAlice(0, -1, 0, 0);  
    return maxIncome;
};