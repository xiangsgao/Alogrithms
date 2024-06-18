/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const visitedCol = new Map(); 
    const visitedRow = new Map();
    const visitedSubGrid = new Map();

    
    
    for(let i = 0; i < board.length; i++){
        const row = board[i];
        for(let j = 0; j < row.length; j++){
            if(board[i][j] === '.'){
                continue;
            }
            const gridCheck = visitedSubGrid.get(`${Math.floor(i / 3)},${Math.floor(j / 3)}`) ?? new Set();
            const colCheck = visitedCol.get(j) ?? new Set();
            const rowCheck = visitedRow.get(i) ?? new Set();
            if(colCheck.has(board[i][j])){
                return false;
            }

            if(rowCheck.has(board[i][j])){
                return false;
            }

            if(gridCheck.has(board[i][j])){
               return false;
            }
            gridCheck.add(board[i][j]);
            rowCheck.add(board[i][j]);
            colCheck.add(board[i][j]);
            visitedCol.set(j, colCheck);
            visitedRow.set(i, rowCheck);
            visitedSubGrid.set(`${Math.floor(i / 3)},${Math.floor(j / 3)}`, gridCheck);
        }
    }

    return true;

};

