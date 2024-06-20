/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dfs = (i, j, matrix, word, x = 0) =>{
  
    if(x === word.length){
        return true;
    }
    const curEl = matrix[i]?.[j];

    if(i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || curEl !== word[x]){
        return false;
    }

    matrix[i][j] = "#";

    const result = dfs(i + 1, j, matrix, word, x + 1) ||
            dfs(i - 1, j, matrix, word, x + 1) ||
            dfs(i, j + 1, matrix, word, x + 1) ||
            dfs(i, j - 1, matrix, word, x + 1);

    matrix[i][j] = curEl;

    return result;
}


//o(n*n)
var exist = function(board, word) {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(dfs(i,j, board, word)){
                return true;
            }
        }
    }
    return false;
};

