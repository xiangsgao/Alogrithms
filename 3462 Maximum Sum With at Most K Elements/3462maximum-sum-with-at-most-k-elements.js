/**
 * @param {number[][]} grid
 * @param {number[]} limits
 * @param {number} k
 * @return {number}
 */


var maxSum = function(grid, limits, k) {
    
    // heap containing [heap, rowIdx];
    const pq = new PriorityQueue((a, b) =>{
        return b[0].front() - a[0].front();
    });

    const M = grid.length;
    for(let i = 0; i < M; i++){
        const row = grid[i];
        const heap = new PriorityQueue((a, b)=>{
            return b - a;
        });
        for(const e of row){
            heap.enqueue(e);
        }

        pq.enqueue([heap, i]);
    }

    let sum = 0;
    while(k > 0){
        const [heap, idx] = pq.dequeue();
        if(limits[idx] >= 1){
            sum += heap.dequeue();
            limits[idx] -= 1;
            k--;
        }

        if(limits[idx] >= 1 && !heap.isEmpty()){
            pq.enqueue([heap, idx]);
        }

        
    }

    return sum;

};

/*

[5,3,7] 12
[8,2,6] 14

*/