/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const N = matrix.length;
    let topLeft = [0, 0];
    let bottomRight = [N - 1, N - 1];

    const rotate = (tx, ty, bx, by) =>{
        
        const newRight = matrix[tx].slice(ty, by + 1);
        const newBottom = matrix.slice(tx, bx + 1).map((e) => e[by]);
        const newLeft = matrix[bx].slice(ty, by + 1);
        const newTop = matrix.slice(tx, bx + 1).map(e => e[ty]);

        // new top
        for(let i = ty; i <= by; i++){
            matrix[tx][i] = newTop.pop();
        }

        // new right
        for(let i = tx; i <= bx; i++){
            matrix[i][by] = newRight.shift();
        }

        // new bottom 
        for(let i = ty; i <= by; i++){
            matrix[bx][i] = newBottom.pop();
        }

        // new left 
        for(let i = tx; i <= bx; i++){
            matrix[i][ty] = newLeft.shift();
        }
    }

    while(true){
        const [tx, ty] = topLeft;
        const [bx, by] = bottomRight;
        if(tx > bx && ty > by){
            break;
        }

        rotate(tx, ty, bx, by);

        topLeft = [tx + 1, ty + 1];
        bottomRight = [bx - 1, by - 1];
    }

};