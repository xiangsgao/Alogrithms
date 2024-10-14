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
 * @param {number} k
 * @return {number}
 */
var kthLargestPerfectSubtree = function(root, k) {
    let que = [];
    
    const getSize = (node) =>{

        if(!node){
            return [0, true];
        }

        if(!node.left && !node.right){
            return [1, true];
        }

        const [nodesLeft, isPerfectLeft] = getSize(node.left);
        const [nodesRight, isPerfectRight] = getSize(node.right);

        const isThisPerfect = isPerfectLeft && isPerfectRight && nodesLeft === nodesRight;

        return [nodesLeft + nodesRight + 1, isThisPerfect];

    } // stub
    
    const dfs = (node = root) =>{
        if(!node){
            return;
        }
        
        const [size, isPerfect] = getSize(node);
        if(isPerfect){
            que.push(size);
        }

        dfs(node.left);
        dfs(node.right);
    }
    dfs();
    que = que.sort((a, b) => b - a);
    return que[k - 1] ?? -1;
};