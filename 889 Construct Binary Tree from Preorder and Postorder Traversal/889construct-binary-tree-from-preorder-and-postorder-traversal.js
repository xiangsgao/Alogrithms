/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

 // cant solve because too difficult. the idea for questions like this is to figoure out boundary and check which nodes belong to which subtree
var constructFromPrePost = function(preorder, postorder) {
    const N = postorder.length;

    const map = new Map();

    for(let i = 0; i < postorder.length; i++){
        map.set(postorder[i], i);
    }

    const build = (i1,i2,j1,j2) =>{
        if(i1 > i2 || j1 > j2){
            return null;
        }

        const node = new TreeNode(preorder[i1]);

        if(i1 !== i2){
            // build left
            const leftVal = preorder[i1 + 1];
            const mid = map.get(leftVal);
            const leftSize = mid - j1 + 1;
            node.left = build(i1 + 1, i1 + leftSize,j1, mid);
            node.right = build(i1 + leftSize + 1, i2, mid + 1, j2 - 1);
        }

        return node;
    }   

    return build(0, N-1, 0, N-1);
};