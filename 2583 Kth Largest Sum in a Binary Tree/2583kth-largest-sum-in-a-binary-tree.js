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
var kthLargestLevelSum = function(root, k) {
    const que = [root];
    let sums = [];
    while(que.length){
        const len = que.length;

        let sum = 0; 
        for(let i = 0; i < len; i++){
            const curNode = que.shift();
            const val = curNode.val;
            sum += val;
            if(curNode.left){
                que.push(curNode.left);
            } 

            if(curNode.right){
                que.push(curNode.right);
            }
        }
        sums.push(sum);
    }

    sums = sums.sort((a, b) => b - a);
    return sums[k - 1] ?? -1
};