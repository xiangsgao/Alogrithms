/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
// wasnt able to solve because did not realize we can use dfs and use in order transversal. we can use # to indicate return in our recursion. reconstrcuting the tree from the string is tricky. we need to do a while loop to handle all the child nodes and only break until we see a # which means stop and return to the previous recursion
class Codec {
  	constructor() {
        
    }
    
    /** 
     * @param {_Node|null} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        if(!root){
            this.str = "";
            return;
        }

        let str = [];
        const dfs = (node = root) =>{

            
            const val = node.val;
            str.push(val);
            for(const child of node.children){
                dfs(child);
            }
            str.push("#");
        }
        dfs();
        this.str = str.join(",");
    };
	
    /** 
     * @param {string} data 
     * @return {_Node|null}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        if(!this.str){
            return null;
        }

        const nodes = this.str.split(",");
        const root = new _Node(Number(nodes.shift()), []);
        const dfs = (children) =>{
            const cur = nodes.shift();
            const val = Number(cur);
            const child = new _Node(val, []); 
            children.push(child);
            
            while(true){
                if(nodes[0] === "#"){
                    nodes.shift();
                    break;
                }
                dfs(child.children);
            }
        }

         while(nodes.length){
            if(nodes[0] === "#"){
                nodes.shift();
                continue;
            }
             dfs(root.children);
        }
       
        return root;
    };



}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));