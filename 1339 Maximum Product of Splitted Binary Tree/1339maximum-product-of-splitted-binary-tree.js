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
var maxProduct = function(root) {
    let max = -Infinity;
    const cache = new Map();
    const getChildSum = (cur) =>{
       
         if(!cur){
             
            return 0;
        }

        if(cache.has(cur)){
            return cache.get(cur);
        }
        const val = cur.val;
        const leftChildSum = getChildSum(cur.left);
        const rightChildSum = getChildSum(cur.right);
        const retval = val + leftChildSum + rightChildSum;
        cache.set(cur, retval);
        return retval;
    }

    const dfs = (cur = root, sumTopDown = 0) =>{
        if(!cur){
            return;
        }
        
        const leftChildSum = getChildSum(cur.left);
        const rightChildSum = getChildSum(cur.right);
         
        const val = cur.val;
        sumTopDown += val;

        const splittedRight = sumTopDown + rightChildSum;
        const splittedLeft = sumTopDown + leftChildSum;;

        max = Math.max(max, splittedRight * leftChildSum, splittedLeft * rightChildSum);

        dfs(cur.left, splittedRight);
        dfs(cur.right, splittedLeft);
    }

    dfs();

    return  max % 1000000007;


};