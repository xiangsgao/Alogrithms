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
 * @return {number[]}
 */
var largestValues = function(root) {
    const levels = [];

    const dfs = (cur = root, level = 0) =>{
        if(!cur){
            return;
        }

        const val = cur.val;
        levels[level] = Math.max(levels[level] ?? -Infinity, val);
        dfs(cur.left, level + 1);
        dfs(cur.right, level + 1);
    }

    dfs();

    return levels;
};