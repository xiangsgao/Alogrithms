/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    const trie = { path: "" };
    const set = new Set();
    const buildTree = (prefix) => {
        let cur = trie;
        for(const e of prefix){
            const exisiting = cur[e] ?? {count: 0};
            exisiting.count += 1;
            exisiting.path = cur.path + "/" + e;
            cur[e] = exisiting;
            cur = cur[e];
        }

        cur.end = true;
    }

    for(const path of folder){
        const arr = path.split("/").filter(e => e);
        buildTree(arr);
    }

    const dfs = (node) =>{
        
        if(node.end){
            return [node.path];
        }

        let shortest;
        for(const key of Object.keys(node)){
            if(key === "count" || key === "path"){
                continue;
            }

            if(shortest === undefined){
                shortest = dfs(node[key]);
            }else{
                const newShortest = dfs(node[key]);
                shortest = [...newShortest, ...shortest];
            }
        }
        return shortest;
    }
   
    for(const key of Object.keys(trie)){
        if(key === "path"){
            continue;
        }

        const shortest = dfs(trie[key]);
        for(const e of shortest){
            set.add(e);
        }
    }

    return [...set.values()]
};