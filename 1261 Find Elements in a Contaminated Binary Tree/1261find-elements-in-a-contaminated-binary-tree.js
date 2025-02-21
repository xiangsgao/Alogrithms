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
 */
var FindElements = function(root) {
    this.set = new Set();
    root.val = 0;
    this.set.add(0);
    const stack = [root];


    while(stack.length){
        const node = stack.shift();

        if(node.left){
            node.left.val =  2 * (node.val) + 1;
            stack.push(node.left);
            this.set.add(node.left.val);
        }

        if(node.right){
            node.right.val =  2 * (node.val) + 2;
            stack.push(node.right);
            this.set.add(node.right.val);
        }
    }
    this.root = root;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {

    return this.set.has(target);

    // this is just regular tree transversal

    // const stack = [this.root];


    // while(stack.length){
    //     const node = stack.shift();
    //     if(node.val === target){
    //         return true;
    //     }

    //     if(node.left){
    //         stack.push(node.left);
    //     }

    //     if(node.right){
    //         stack.push(node.right);
    //     }
    // }

    // return false;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */