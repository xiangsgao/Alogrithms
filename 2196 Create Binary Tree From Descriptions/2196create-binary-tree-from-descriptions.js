/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const dep = new Map();

    for(const e of descriptions){
        const [parent, c, isLeft] = e;
        dep.set(c, {parent, isLeft});
    }

    let parents = new Map();
    let head = null;

    const recursive = (e) =>{
        const child = parents.get(e) ?? new TreeNode(e);
        const {parent, isLeft} = dep.get(e) ?? {};
        if(!parent && head === null){
            head = child;
            parents.set(e, child);
            return head;
        }

        const parentNode = parents.get(parent) ?? recursive(parent);
        
        if(isLeft){
            parentNode.left = child;
        }else{
            parentNode.right = child;
        }

        parents.set(e, child);

        return child;
    }

    for(const e of dep.keys()){
        recursive(e);
    }

    return head;

};