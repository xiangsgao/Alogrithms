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
var isEvenOddTree = function(root) {
    const stack = [root];
    let level = 0;
    while(stack.length){

       
        const len = stack.length;
        const even = level % 2 === 0;

        for(let i = 0; i < len; i++){
            const node = stack[i];
            if(node.left){
               
                stack.push(node.left);
            }

            if(node.right){
                stack.push(node.right);
            }
        }
        
 
        if(even){
            // increasing
            let prev = stack.shift();
            if(prev.val % 2 === 0){
                return false;
            }
            for(let i = 1; i < len; i++){
                const cur = stack.shift();
                if(cur.val <= prev.val || (cur.val % 2 === 0)){
                    return false;
                }
                prev = cur;
            }
        }else{
            // decreasing
            let prev = stack.shift();
            if(prev.val % 2 !== 0){
                return false;
            }
            for(let i = 1; i < len; i++){
                const cur = stack.shift();
                if(cur.val >= prev.val || (cur.val % 2 !== 0)){
                    return false;
                }
                prev = cur;
            }
        }
        level +=1;
    }

    return true;
};