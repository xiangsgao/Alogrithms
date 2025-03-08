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
var countUnivalSubtrees = function(root) {
    
 
    const cache = new Map();
    let res = 0;
    const isAllChildrenTheSame = (node, parentVal) =>{
        if(!node){
            return true;
        }
        
        if(node.val !== parentVal){
            return false;
        }

        const isLeftSame = isAllChildrenTheSame(node.left, parentVal);

        const isRightSame = isAllChildrenTheSame(node.right, parentVal);

        return isLeftSame && isRightSame;
    }

    
    const dfs = (node = root) =>{

        if(!node){
            return;
        }

        if(isAllChildrenTheSame(node, node.val)){
            res+=1;
        }   

        dfs(node.left);
        dfs(node.right);
    };


    dfs();

    return res;
};