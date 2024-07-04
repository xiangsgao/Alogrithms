/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    
    if(!root1){
        return root2;
    }

    if(!root2){
        return root1;
    }

    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
};


//  TreeNode dfs(TreeNode a, TreeNode b) {
//         TreeNode root = null;
//         if (a == null && b == null) {
//             root = null;
//         } else if (a != null && b != null) {
//             root = new TreeNode(a.val + b.val);
//             root.left = dfs(a.left, b.left);
//             root.right = dfs(a.right, b.right);
//         } else if (a != null) {
//             root = new TreeNode(a.val);
//             root.left = dfs(a.left, null);
//             root.right = dfs(a.right, null);
//         } else if (b != null) {
//             root = new TreeNode(b.val);
//             root.left = dfs(null, b.left);
//             root.right = dfs(null, b.right);
//         }

//         return root;
//     }