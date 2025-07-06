/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    
    const visited = new Map();
   


    const dfs = (node, red) =>{
        
        const neighbors = graph[node];
        visited.set(node, red);

        for(const n of neighbors){
            if(!visited.has(n)){
                const res = dfs(n, !red);
                if(!res){
                    return false;
                }
            }

            

            if(visited.has(n) && visited.get(n) === red){
                return false;
            }
        }

        return true;
    }

    
    for(let i = 0; i < graph.length; i++){
        if(!visited.has(i)){
            const res = dfs(i, true);
            if(!res){
                return false;
            }
        }
    }

    return true;
};