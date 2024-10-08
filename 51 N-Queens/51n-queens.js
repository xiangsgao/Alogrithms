/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
     const col = new Set();
        const pos = new Set();
        const neg = new Set();
        const res = [];
        const board = Array(n).fill().map(e => Array(n).fill("."));
        const recursion = (i = 0) =>{
            if(i === n){
                const copy = board.map(e => e.join(""));
                res.push(copy);
                return;
            }
            
            for(let c = 0; c < n; c++){
                if(col.has(c) || pos.has(i - c) || neg.has(i + c)){
                    continue;
                }

                col.add(c);
                pos.add(i - c);
                neg.add(i + c);
                board[i][c] = "Q";
                recursion(i + 1);
                col.delete(c);
                pos.delete(i - c);
                neg.delete(i + c);
                board[i][c] = ".";
            } 
            
        }

        recursion();

        return res;

};