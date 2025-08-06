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
 * @return {boolean}
 */
 // didnt solve because i was dumb and make so many bugs
 // idea is for a tree to be complete, you can not have any single existing node after you see a null node
var isCompleteTree = function(root) {
    
    const que = [root];
    let nil = false;
    while(que.length){
        const len = que.length;
        let i = 0;
       
        for(; i < len;){
            const node = que.shift();
            if(node === null){
                if(!nil){
                    nil = true;
                }
            }else if(nil === true){
                return false;
            }else {
                que.push(node.left ?? null);
                que.push(node.right ?? null);
            }
            i++;
        }
    }

    return true;
};