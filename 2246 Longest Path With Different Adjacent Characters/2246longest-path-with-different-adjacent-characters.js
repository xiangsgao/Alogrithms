/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
 // coundt solve because misread the problem. root node will always be part of the longest path. also, need to return the longest child path rather than the longest + second longest. the return val is the longest + 2nd longest tho.
var longestPath = function(parent, s) {
   const map = new Map();

   for(let i = 0; i < s.length; i++){
      const p = parent[i];
      const cur = map.get(p) ?? [];
      cur.push(i);
      map.set(p, cur);
   }

   let res = 1;

   const dfs = (node) =>{
        const longest = new PriorityQueue((a, b) => b - a);

        for(const child of (map.get(node) ?? [])){
            const len = dfs(child);
            if(s[child] !== s[node]){  
                longest.enqueue(len);
            }
        }

        const fL = longest.dequeue() ?? 0;
        const sL = longest.dequeue() ?? 0;
        res = Math.max(res, 1 + fL + sL);

        return fL + 1;
   }

   dfs(0);
   return res;
};