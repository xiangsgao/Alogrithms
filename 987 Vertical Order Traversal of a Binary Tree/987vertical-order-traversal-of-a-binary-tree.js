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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    
    const map =  new Map();

    const compare = (a, b) =>{
        const {row: rowA, val: valA} = a;
        const {row: rowB, val: valB} = b;
        if(rowA === rowB){
            return valA - valB;
        }

        return rowA - rowB;
    }

    const dfs = (node = root, row = 0, col = 0) =>{
        if(!node){
            return;
        }


        dfs(node.left, row + 1, col - 1);
        const key = col;
        const cur = map.get(key) ?? new PriorityQueue(compare);
        cur.enqueue({row, val: node.val});
        map.set(key, cur);
        dfs(node.right, row + 1, col + 1);
    }

    dfs();
    const keys = [...map.keys()].sort((a, b) => a - b);
    return keys.map(e => map.get(e).toArray().map(x => x.val));
};

//[[10,3],[0,2,7],[8],[6],[1,5],[4,9,12],[11]]

//[[8],[6],[10,3],[0,2,7],[1,5],[4,9,12],[11]]