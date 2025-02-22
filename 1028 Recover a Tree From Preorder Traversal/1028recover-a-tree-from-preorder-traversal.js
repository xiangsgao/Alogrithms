/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {string} traversal
 * @return {TreeNode}
 */

 // cant solve because it is too confusing to code up. basically, stack length stands for the level of the nodes and by poping, we can transverse back to the previous level to add the right child
var recoverFromPreorder = function(traversal) {
    

    
    const stack = [];
    let i = 0;
    let dashes = 0;
    while(i < traversal.length){
        if(traversal[i] === "-"){
            dashes += 1;
            i += 1;
        }else{
            let j = i;
            while(j < traversal.length && traversal[j] !== "-"){
                j+=1;
            }
            const val = Number(traversal.substring(i, j));
            const node = new TreeNode(val);

            // if length is greater than we need to go back to the previous levels
            while(stack.length > dashes){
                stack.pop();
            }
            
            if(stack.length && !stack[stack.length - 1].left){
                stack[stack.length - 1].left = node;
            }else if(stack.length){
                stack[stack.length - 1].right = node;
            }

            stack.push(node);

            i = j;
            dashes = 0;
        }
    }

    return stack[0];

    
};