/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const GUARD = 2;
    const WALL = 3;
    const matrix = Array(m).fill().map(() => Array(n).fill(0));



    for(const [x,y] of walls){
        matrix[x][y] = WALL;
    }


    for(const [x,y] of guards){
        matrix[x][y] = GUARD;
    }

    for(const [x,y] of guards){
        let i = x  + 1;
        while(i < m){
            const cell = matrix[i][y];
            if(cell === WALL || cell === GUARD){
                break;
            }
            matrix[i][y] = 1;
            i++;
        }

        i = x - 1;
        while(i >= 0){
            const cell = matrix[i][y];
            if(cell === WALL || cell === GUARD){
                break;
            }
            matrix[i][y] = 1;
            i--;
        }


        i = y - 1;
        while(i >= 0){
            const cell = matrix[x][i];
            if(cell === WALL || cell === GUARD){
                break;
            }
            matrix[x][i] = 1;
            i--;
        }


        i = y  + 1;
        while(i < n){
            const cell = matrix[x][i];
            if(cell === WALL || cell === GUARD){
                break;
            }
            matrix[x][i] = 1;
            i++;
        }
    }

    let res = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                res+=1;
            }
            
        }
    }

    return res;
};