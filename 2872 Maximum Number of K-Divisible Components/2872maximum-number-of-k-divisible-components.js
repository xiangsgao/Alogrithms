/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const map = new Map();


    for(const [from, to] of edges){
        const cur = map.get(from) ?? [];
        const cur2 = map.get(to) ?? [];
        cur.push(to);
        cur2.push(from);
        map.set(from, cur);
        map.set(to, cur2);
    }

    let res = 0;
    
    const dfs = (node, parent) =>{
        let total = values[node];

        for(const child of (map.get(node) ?? [])){
            if(child === parent){
                continue;
            }
            total += dfs(child, node);
        }

        if(total % k === 0){
            res += 1;
        }

        return total;
    }

    dfs(0, -1);

    return res;
};