/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    
    const N = grid.length;

    // 16 / 2
    const buildTree = (r = 0, c = 0, n = N) =>{
        let allSame = true;

        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(grid[r][c] !== grid[r + i][c + j]){

                    allSame = false;
                    break;
                }
            }
        }

        if(allSame){
            return new Node(grid[r][c], true);
        }
        
        n = n / 2;

        topLeft = buildTree(r, c, n);
        topRight = buildTree(r, c + n, n);
        bottomLeft = buildTree(r + n, c, n);
        bottomRight = buildTree(r + n, c + n, n);
        return new Node(0, false, topLeft, topRight, bottomLeft, bottomRight);
    }


    return buildTree(0,0,N);

};