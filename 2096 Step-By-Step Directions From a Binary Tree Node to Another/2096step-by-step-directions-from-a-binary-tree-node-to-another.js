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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const dfs = (node, path, target) =>{
        if(node === null){
            return "";
        }

        if(node.val === target){
            return path;
        }

        path.push("L");
        const left = dfs(node.left, path, target);
        if(left){
            return left;
        }
        
        path.pop();
        path.push("R");
        const right = dfs(node.right, path, target);
        if(right){
            return right;
        }

        path.pop();
        return "";
    }

    const origin = dfs(root, [], startValue);
    const dest = dfs(root, [], destValue);

    // find the lowest common ancestor index
    let index = 0;
    while(index < origin.length && index < dest.length){
        if(origin[index] !== dest[index]){
            break;
        }
        index++;
    }
    
    let retval = "";
    retval += "U".repeat(origin.length - index)

    for(let i = index; i < dest.length; i++){
        const cur = dest[i];
        retval += cur;
    }
    return retval;
};