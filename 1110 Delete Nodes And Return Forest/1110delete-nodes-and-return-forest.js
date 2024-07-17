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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const set = new Set(to_delete);

    const retval = [];

    if(!set.has(root.val)){
        retval.push(root);
    }

    const dfs = (node = root, parent = null, leftDir = false) =>{
        if(node === null){
            return;
        }

        const left = node.left;
        const right = node.right;
        
        if(set.has(node.val)){

            if(parent){
                if(leftDir){
                    parent.left = null;
                }else{
                    parent.right = null;
                }
            }

            if(left && !set.has(left.val)){
                retval.push(left);
            }

            if(right && !set.has(right.val)){
                retval.push(right);
            }

            node.left = null;
            node.right = null;
        }

        dfs(left, node, true);
        dfs(right, node, false);
    }

    dfs();
    return retval;
};