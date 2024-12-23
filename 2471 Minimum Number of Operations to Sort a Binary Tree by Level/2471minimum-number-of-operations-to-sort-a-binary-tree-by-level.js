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
var minimumOperations = function(root) {
    const stack = [root];
    let res = 0;
    while(stack.length){
        const len = stack.length;
        const nums = [];
        for(let i = 0; i < len; i++){
            const parent = stack.shift();
            nums.push(parent.val);
            if(parent.left){
                stack.push(parent.left);
            }

            if(parent.right){
                stack.push(parent.right);
            }
        }

        const map = nums.reduce((map, e,  i) => {
            map.set(e, i);
            return map;
        }, new Map());

        const sorted = [...nums].sort((a, b) => a - b);

        for(let i = 0; i < sorted.length; i++){
            if(nums[i] !== sorted[i]){
                const incorrect = nums[i];
                const correct = sorted[i];
                const correctIdx = map.get(correct);
                nums[i] = correct;
                nums[correctIdx] = incorrect;
                map.set(correct, i);
                map.set(incorrect, correctIdx);
                res += 1;
            }
        }

    }

    return res;
};