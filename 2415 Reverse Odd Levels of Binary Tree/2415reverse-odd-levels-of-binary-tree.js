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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    
    const stack = [root];
    let flip = true;
    while(stack.length){
        if(flip){
            const children = [];
            for(const parent of stack){
                const leftVal = parent.left?.val;
                const rightVal = parent.right?.val
                if(leftVal === undefined || rightVal === undefined){
                    break;
                }
                children.push(leftVal);
                children.push(rightVal);
            }

            if(children.length){
                for(const parent of stack){
                    parent.left.val = children.pop();
                    parent.right.val = children.pop();
                }
            }
        }


        const len = stack.length;

        for(let i = 0; i < len; i++){
            const parent = stack.shift();
            if(parent.left && parent.right){
                stack.push(parent.left);
                stack.push(parent.right);
            }
        }

        flip = !flip;

    }

    return root;
};