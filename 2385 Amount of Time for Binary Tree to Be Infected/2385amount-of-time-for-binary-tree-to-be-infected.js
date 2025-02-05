/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    const adj = new Map();

    const dfs = (node = root, parent = null)=>{
        if(!node){
            return;
        }

        const neighbors = [];

        if(parent){
            neighbors.push(parent.val);
        }

        if(node.left){
            neighbors.push(node.left.val);
        }

        if(node.right){
            neighbors.push(node.right.val);
        }

        adj.set(node.val, neighbors);
        
        dfs(node.left, node);
        dfs(node.right, node);
    }

    dfs();

    let time = -1;
    const que = [start];
    const visited = new Set();
    
    while(que.length){
        const len = que.length;
        for(let i = 0; i < len; i++){
            const cur = que.shift();
            visited.add(cur);
            for(const n of adj.get(cur)){
                if(!visited.has(n)){
                    que.push(n);
                }
            }
        }
        
        time += 1;
    }

    return time;
};