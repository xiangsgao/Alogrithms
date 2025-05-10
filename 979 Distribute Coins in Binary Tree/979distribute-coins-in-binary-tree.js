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

 // cant solve. the idea is that moves in a subtree is the absolute difference between the total number of nodes and the total number of the coins. 
// this is multiplicative so gets added up to the larger parent subtree

var distributeCoins = function(root) {

    let res = 0;
    const dfs = (node = root) =>{

        if(!node){
            return [0, 0] // size, coins
        }

        const [lSize, lCoins] = dfs(node.left);
        const [rSize, rCoins] = dfs(node.right);
        
        const size = 1 + lSize + rSize;
        const coins = node.val + lCoins +rCoins;
        res += Math.abs(size - coins);
        return [size, coins];
    }

    dfs();

    return res;  

};