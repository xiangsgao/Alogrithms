/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const stack = [[ 0 , [0] ]];
    const res = [];

    while(stack.length){
        const [node, path] = stack.shift();

        if(node ===  graph.length - 1){
            res.push(path);
            continue;
        }

        for(const n of graph[node]){
            stack.push([n, [...path, n]])
        }
    }

    return res;
 
};