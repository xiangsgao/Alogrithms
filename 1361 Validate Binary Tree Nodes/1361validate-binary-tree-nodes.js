/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */

 // couldnt solve because did realize we can loop the two array after converting to set to find the root
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const N = leftChild.length;
    
    const left = new Set(leftChild);
    const right = new Set(rightChild);

    let root = null;

    for(let i = 0; i < N; i++){
        if(!left.has(i) && !right.has(i)){
            root = i;
            break;
        }
    }

    const visited = new Set();
    const dfs = (node = root) =>{
        if(node === -1){
            return true;
        }
        
        if(visited.has(node)){
            return false;
        }

        visited.add(node);
        const left = leftChild[node];
        const right = rightChild[node];
        return dfs(left) && dfs(right);
    }

    const valid = dfs();
    if(!valid){
        return false;
    }

    return visited.size === N;
};