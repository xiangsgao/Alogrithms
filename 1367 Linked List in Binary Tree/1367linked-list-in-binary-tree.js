/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */


var isSubPath = function(head, root) {

    const dfs = (node = root, curHead = head) =>{
      
        if(!node){
            return false;
        }
       
        const cur = node.val;

        if(!curHead.next && cur === curHead.val){
            return true;
        }

        if(cur !== curHead.val){
            return false;
        }

        return dfs(node.left, curHead.next) || dfs(node.right, curHead.next);

    }

    const dfs2 = (node = root) =>{
        if(!node){
            return false;
        }
        
        if(dfs(node, head)){
            return true;
        }

        return dfs2(node.left) || dfs2(node.right); 
    }

    return dfs2();
};