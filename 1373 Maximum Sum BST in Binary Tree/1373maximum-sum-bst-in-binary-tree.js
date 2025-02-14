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
 // didnt figoure this out because i suck. check the comment below.
var maxSumBST = function(root) {
    
    // check if a node is a bst
    let ans = 0;
    const isBst = (node = root) =>{
        
        if(!node) return [true,0,Infinity,-Infinity];
        let left = isBst(node.left);
        let right = isBst(node.right);
        if(left[0]&&right[0]&&(left[3]<node.val)&&(right[2]>node.val)){ // left max has to be smaller than cur node val and right min has to be greater than cur node val
            ans = Math.max(ans,left[1]+right[1]+node.val);
            return [1,left[1]+right[1]+node.val,Math.min(node.val,left[2]),Math.max(node.val,right[3])];
        }
        return [0,0,0,0]; // [isBst, childSum, minValue, maxValue]
    }

    isBst();
    return ans;
};