/**
 * @param {number[][]} board
 * @return {number}
 */

 // couldnt solve because misunderstood what it means that snake and ladder can only move up once per roll
 // just use regular bfs
var snakesAndLadders = function(board) {
    const length = board.length;
    board = board.reverse();
    const intToPos = (square) =>{
        const r  = Math.floor((square - 1) / length);
        let c = (square - 1) % length;
        if(r % 2 !== 0){
            c = length - 1 - c;
        }
        return [r, c];
    }

    const q = [ [1, 0] ];
    const visited = new Set();

    while(q.length){
        const [square, moves] = q.shift();

        for(let i = 1; i <= 6; i++){
            let nextsquare = square + i;
            const [r, c] = intToPos(nextsquare);
            if(board[r][c] !== -1){ // snake or ladders
                nextsquare = board[r][c];
            }
             if(nextsquare === length * length){
                return moves + 1; 
            }

            if(!visited.has(nextsquare)){
                visited.add(nextsquare);
                q.push([nextsquare, moves + 1]);
            }
        }
    }

    return -1;
};