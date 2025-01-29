/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
 // failed to realize swapping elements can be grouped and if group, they can be reachable becasue they are in the same graph partition, then just pop the smaller lexigraphically
 // can also be done with a dfs. add all the nodes to a visited set. sort the visited set lexigraphically 
var smallestStringWithSwaps = function(s, pairs) {
    
    const parents = Array(s.length).fill().map((_, i) => i);

    const find = (node) =>{
        if(parents[node] !== node){
            parents[node] = find(parents[node]);
        }
        return parents[node];
    }

    const union = (a, b) =>{
        const parentA = find(a);
        const parentB = find(b);
        parents[parentB] = parentA;
    }

    for(const [a,b] of pairs){
        union(a,b);
    }

    for(let i = 0; i < parents.length; i++){
        find(i); // need to flatten the ancestors because one of decendant may not be updated with ancestor
    }

    const groupsMap = new Map();
    for(let i = 0; i < parents.length; i++){
        const parent = parents[i];
        const pq = groupsMap.get(parent) ?? new PriorityQueue({
            compare: (a, b) => a.localeCompare(b)
        });
        pq.enqueue(s[i]);
        groupsMap.set(parent, pq);
    }

    let res = "";
    for(let i = 0; i < s.length; i++){
        const smallestChild = groupsMap.get(parents[i]).dequeue();
        res += smallestChild; 
    }
    
    return res;
    
};