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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let retval = 0;
    const dfs = (node = root) =>{

        if(node === null){
            return [];
        }

        if(node.left === null && node.right === null){
            return [1];
        }

        const leftLeaves = dfs(node.left);
        const rightLeaves = dfs(node.right);

       

        for(const leftLeaf of leftLeaves){
            for(const rightLeaf of rightLeaves){
                if(leftLeaf + rightLeaf <= distance){
                    retval++;
                }
            }
        }

        return [...leftLeaves.map(e => e + 1), ...rightLeaves.map(e => e + 1)]

    } 

    dfs();

    return retval;
};