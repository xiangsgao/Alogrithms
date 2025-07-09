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
 * @param {number} targetSum
 * @return {number}
 */
 // idea is the same as https://leetcode.com/problems/path-sum-iii/description/
 // just apply this to a binary tree
var pathSum = function(root, targetSum) {
    
    let res = 0;
    const a = new Map();
    a.set(0, 1);
    const dfs = (node = root, sum = 0, prefix = new Map(a)) =>{
        

        if(!node){
            return;
        }

        const cur = node.val;
        sum += cur;
        const dif = sum - targetSum;

        if(prefix.has(dif)){
            res += prefix.get(dif);
        }

        prefix.set(sum, (prefix.get(sum) ?? 0) + 1);

        dfs(node.left, sum, new Map(prefix));
        dfs(node.right, sum, new Map(prefix));
    }


    dfs();

    return res;
};