/**
 * @param {number[][]} board
 * @return {number[][]}
 */

// failed to solved because it is a pain to code up but the logic is clear
var candyCrush = function(board) {

    const M = board.length;
    const N = board[0].length;

    const findAndCrush = () =>{
        let complete = true;

        // check up and down
        for(let r = 1; r < M - 1; r++){
            for(let c = 0; c < N; c++){
                if(board[r][c] === 0){
                    continue;
                }
                const cur = board[r][c];
                const down = board[r + 1][c];
                const up = board[r - 1][c];
                if(Math.abs(cur) === Math.abs(up) && Math.abs(cur) === Math.abs(down)){
                    board[r][c] = -1 * Math.abs(cur);
                    board[r + 1][c] = -1 * Math.abs(down);
                    board[r - 1][c] = -1 * Math.abs(up);
                    complete = false;
                }
            }
        }

         // check left and right
        for(let r = 0; r < M; r++){
            for(let c = 1; c < N - 1; c++){
                    if(board[r][c] === 0){
                        continue;
                    }
                    const cur = board[r][c];
                    const left = board[r][c - 1];
                    const right = board[r][c + 1];
                    if(Math.abs(cur) === Math.abs(left) && Math.abs(cur) === Math.abs(right)){
                        board[r][c] = -1 * Math.abs(cur);
                        board[r][c - 1] = -1 * Math.abs(left);
                        board[r][c + 1] = -1 * Math.abs(right);
                        complete = false;
                    }
            }
        }

        // set the crush candies to 0
         for(let r = 0; r < M; r++){
            for(let c = 0; c < N; c++){
                if(board[r][c] < 0){
                    board[r][c] = 0;
                }
            }
        }

        return complete;
    }


    const drop = ()=>{
         for(let c = 0; c < N; c++){
            let lowestZero = -1;
            for(let r = M - 1; r >= 0; r--){
                if(board[r][c] === 0){
                    lowestZero = Math.max(lowestZero, r);
                }else if(lowestZero >= 0){
                    const cur = board[r][c];
                    const lv =  board[lowestZero][c];
                    board[r][c] = lv;
                    board[lowestZero][c] = cur;
                    lowestZero -= 1
                }
            }
         }
    }


    while(!findAndCrush()){
       drop();
    }
    
    return board;
};

/***
    [1,1,2]
    [2,2,2]
    [3,3,2]


    [
        [0,0,0],
        [1,1,2],
        [3,3,1]
    ]

    [
        [0,0,0],
        [1,1,0],
        [3,3,1]
    ]

 */