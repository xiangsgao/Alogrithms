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
var replaceValueInTree = function(root) {
    const que = [[null, root]];
    const res = [];
    while(que.length){
        const len = que.length;
        let total = 0;
        const parentMap = new Map();
        for(let i = 0; i < len; i++){
            const [parent, node] = que.shift();
            total += node.val;
            const cur = parentMap.get(parent) ?? {count: 0, nodes: []};
            cur.nodes.push(node);
            cur.count += node.val;
            parentMap.set(parent, cur);
            if(node.left){
                que.push([node, node.left]);
            }

            if(node.right){
                que.push([node, node.right]);
            }
        }
       
        for(const key of parentMap.keys()){
            if(key === null){
                // this means the first iteration
                parentMap.get(key).nodes[0].val = 0;
                continue; 
            } 
            const cousins = total - parentMap.get(key).count;
            for(const node of parentMap.get(key).nodes){
                node.val = cousins;
            }
        }
    }
    return root;
};