/**
 * @param {number} n
 */

 /*
    ****
    ****
    ****
    ****


 */

 class TicTacToe{
    constructor(n){
        this.grid = Array(n).fill().map(() => Array(n).fill(""));
        this.size = n;
    }

    move(row, col, player){
        const curCount = this[player] ?? {rows: new Map(), cols: new Map(), dia1: 0, dia2: 0}; // keep track of diagonals, horizontals, and vertical count of this player
        this.grid[row][col] = player;
        // increament the count here
        
        curCount.rows.set(row, (curCount.rows.get(row) ?? 0) + 1);
        curCount.cols.set(col, (curCount.cols.get(col) ?? 0) + 1);
        if(row === col){
            curCount.dia1 += 1;
        }

        if(row + col === this.size - 1){
            curCount.dia2 += 1;
        }
        
        this[player] = curCount;
        return this.hasWon(player, row, col);
    }



    hasWon(player, row, col){
        
        const count = this[player];
        if(
            count.cols.get(col) === this.size ||
            count.rows.get(row) === this.size ||
            count.dia1 === this.size ||
            count.dia2 === this.size
        ){
            return player;
        }

        return 0;
    }
 }

/***
   [ 1, '', 2 ], 
   [ '', 2, '' ], 
   [ 1, '', 1 ]


 */