/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
 /**
    couldnt code this up but
    think of this like a calculator problem. since the string will always be valid, you can tree the nodes like numbers to perform operations on. pop node whenever you see closing parantheniss and use assign it to the previous node. you dont need to keep track of the opening pareathesis because it is always balanced binary tree
  */
var str2tree = function(s) {

    if(!s){
        return null;
    }

    
    const nums = new Set(
        "1234567890".split(""));

    const stack = [];

    let idx = 0;
    while(idx < s.length){
        const cur = s[idx];

        if(cur=== ")"){
            const child = stack.pop();
            if(!stack.at(-1).left){
                stack.at(-1).left = child;
            }else{
                stack.at(-1).right = child;
            }
        }else if(cur === "-"){
            idx += 1;
            let val = "";
            while(idx < s.length && nums.has(s[idx])){
                val += s[idx++];
            }
            const integer = Number(val);
            idx -= 1;
            stack.push(new TreeNode(-1 * integer));
        }else if(nums.has(cur)){
            let val = "";
            while(idx < s.length && nums.has(s[idx])){
                val += s[idx++];
            }
            const integer = Number(val);
            idx -= 1;
            stack.push(new TreeNode(integer));
        }

        idx += 1;
    }

    return stack.pop();
};