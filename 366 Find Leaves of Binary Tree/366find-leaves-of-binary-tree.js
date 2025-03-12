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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    
    const res = [];
    const dfs = (node = root) =>{
        if(!node){
            return -1;
        }

        // add left
        const levelLeft = 1 + dfs(node.left);
        
        // add right
        const levelRight = 1 + dfs(node.right);

        // disconnect and add cur
        node.left = null;
        node.right = null;

        const maxLevel = Math.max(levelLeft, levelRight);
        const curArray = res[maxLevel] ?? [];
        curArray.push(node.val);
        res[maxLevel] = curArray;
        return maxLevel;
    }

    dfs();
    return res;

};