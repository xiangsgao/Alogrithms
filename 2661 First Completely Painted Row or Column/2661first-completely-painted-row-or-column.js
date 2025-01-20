/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const M = mat.length;
    const N = mat[0].length;

    const priority = new Map();

    for(let i = 0; i < arr.length; i++){
        const cur = arr[i];
        priority.set(cur, i);
    }

    const pq = new PriorityQueue({
        compare: ([a], [b]) =>{
            return a - b;
        }
    })

    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            const cur = mat[i][j];
            pq.enqueue([
                priority.get(cur),
                i,
                j,
                cur
            ]);
        }
    }


    const rC = new Map();
    const cC = new Map();

    while(!pq.isEmpty()){
        const [i, r, c, e] = pq.dequeue();
        rC.set(r, (rC.get(r) ?? 0) + 1);
        cC.set(c, (cC.get(c) ?? 0) + 1);
        if(rC.get(r) === N || cC.get(c) === M){
            return i;
        }
    }

};

/***
    4,3,5
    1,2,6


    1,4,5,2,6,3
 */