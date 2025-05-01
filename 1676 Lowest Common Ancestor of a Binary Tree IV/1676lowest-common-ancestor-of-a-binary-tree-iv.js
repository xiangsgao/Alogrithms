/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
    
    const set = new Set(nodes);

    const dfs = (node = root) =>{
        if(!node){
            return null;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        if(set.has(node)){
            return node;
        }

        if(left && right){
            return node;
        }

        if(left){
            return left;
        }

        if(right){
            return right;
        }


    }

    return dfs();

};