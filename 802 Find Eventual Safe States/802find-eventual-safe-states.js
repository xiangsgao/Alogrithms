/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const visited = new Set();
    const map = new Map();

    const dfs = (node) =>{

        if(map.has(node)){
            return map.get(node);
        }

        if(visited.has(node)){
            return false;
        }

        visited.add(node);
        const neighbors = graph[node];
        let retval = true;

        for(const n of neighbors){
            const isValid = dfs(n);
            retval = retval && isValid;
        }

        visited.delete(node);
        map.set(node, retval);
        return retval;

    }

    const res = [];
    for(let i = 0; i < graph.length; i++){
        const isSafe = dfs(i);
        if(isSafe){
            res.push(i);
        }
    }

    return res;
};