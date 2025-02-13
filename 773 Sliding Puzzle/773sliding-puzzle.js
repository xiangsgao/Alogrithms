/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    
   const adj = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4]
   }

   let iB = [];
   for(const row of board){
    for(const e of row){
        iB.push(e.toString());
    }
   }

   iB = iB.join("");

   const stack = [[iB.indexOf("0"), iB, 0]];
    const visited = new Set();
   while(stack.length){
        const [i, b, len] = stack.shift();

        if(b === "123450"){
            return len;
        }

        const bArr = b.split("");
        for(const j of adj[i]){
            newBArr = [...bArr];
            const iE = newBArr[i];
            const jE = newBArr[j];
            newBArr[i] = jE;
            newBArr[j] = iE;
            const str = newBArr.join("");
            if(!visited.has(str)){
                 stack.push([j, str, len + 1]);
                 visited.add(str);
            }
           
        }
   }

    return -1;
};  