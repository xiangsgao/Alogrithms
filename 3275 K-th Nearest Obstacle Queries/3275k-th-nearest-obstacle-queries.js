/**
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */

 // failed to realize if you want the 2nd largest element, just make sure the pq has 2 elements.
var resultsArray = function(queries, k) {


    const pq = new PriorityQueue({
        compare: (a, b) => b - a 
    });
    
    const res = queries.map(() => -1);

    let i = 0;
    // [[-6,4],[7,8],[-2,-1],[1,-9],[-9,4]]
    //    10    15     3     10     13
    for(; i < queries.length; i++){
        const [x, y] = queries[i];                  
        const dis = Math.abs(x) + Math.abs(y);
        pq.enqueue(dis);
        // make sure max heap has less than k elements at all times
        if(pq.size() > k){
            pq.dequeue();
        }

        //skip for invalid
        if(i < k - 1){
            continue;
        }

        res[i] = pq.front();
    } 

    return res;

};