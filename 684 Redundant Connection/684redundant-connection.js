/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 // failed to know union find. also failed to come up with dfs that detects all the nodes that form a cycle
var findRedundantConnection = function(edges) {
    const parents = Array(edges.length + 1).fill().map((_, i) => i);
    const ranks = Array(edges.length + 1).fill().map(() => 1);
    
    const find = (n) =>{
        let p = parents[n];
        while(p !== parents[p]){
            parents[p] = parents[parents[p]];
            p = parents[p];
        }
        return p;
    }

    const union = (n1, n2) =>{
        const p1 = find(n1);
        const p2 = find(n2);

        if(p1 === p2){
            return false; // cant union if parents are the same
        }

        if(ranks[p1] > ranks[p2]){
            parents[p2] = p1;
            ranks[p1] += ranks[p2];
        }else{
            parents[p1] = p2;
            ranks[p2] += ranks[p1];
        }

        return true;
    }

    for(const [from, to] of edges){
        if(!union(from, to)){
            return [from, to];
        }
    }

};