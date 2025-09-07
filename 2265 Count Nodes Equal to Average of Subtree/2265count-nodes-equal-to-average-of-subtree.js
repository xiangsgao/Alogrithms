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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    
    let retval = 0;
    const dfs = (n) =>{
        if(!n){
            return [0, 0];
        }

        const [sumLeft, nodesLeft] = dfs(n.left);
        const [sumRight, nodesRight] = dfs(n.right);

        const cur = n.val;
        const total = 1 + nodesLeft + nodesRight;
        const totalSum = cur + sumLeft + sumRight;
        if(Math.floor(totalSum / total) === cur){
            retval += 1;
        }
        return [totalSum, total];
    }

    dfs(root);
    return retval;

};