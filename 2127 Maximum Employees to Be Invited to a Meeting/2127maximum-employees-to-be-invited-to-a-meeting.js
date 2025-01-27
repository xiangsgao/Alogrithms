/**
 * @param {number[]} favorite
 * @return {number}
 */

 // difficult problem
 // failed to realize if edges === nodes, there is always a cycle
 // failed to realized the none closed cycle can be connected with whatever
 // failed to realized the max people invited is the max of either longest closed circle or the the longest none closed
var maximumInvitations = function(favorite) {
    
    // find the longest closed cycle 
    const N = favorite.length;
    let longest = 0;

    const visited = new Map();
    const twoCycles = [];

    for(let i = 0; i < N; i++){
        if(visited.has(i)){
            continue;
        }

        let start = i;
        let cur = i;
        const curSet = new Set();

        while(!visited.has(cur)){
            visited.set(cur, true);
            curSet.add(cur);
            cur = favorite[cur];
        }
        
        // end will be at the beginning of the closed circle so do a while loop to get rid of the length of nodes not in the closed loop
        if(curSet.has(cur)){
            let len = curSet.size;
            while(start !== cur){
                len -= 1;
                start = favorite[start];
                 
            }
           
            longest = Math.max(longest, len);
            if(len === 2){
                twoCycles.push([cur, favorite[cur]]);
            }
        }
    }


    // find the longest none closed circle

    // first invert the graph

    // rewatch neetcodes video. this part is still confusing

    const inverted = new Map();

    for(let dst = 0; dst < N; dst++){
        const src = favorite[dst];
        const cur = inverted.get(src) ?? new Set();
        cur.add(dst);
        inverted.set(src, cur);
    }

    const bfs = (src, parent)=>{
        const q = [[src, 0]]; // node, length
        let maxLen = 0;
        while(q.length){
            const [node, length] = q.shift();
            if(node === parent){
                continue;
            }

            maxLen = Math.max(maxLen, length);

            for(const n of (inverted.get(node)?? new Set()).values() ){
                q.push([n, length + 1]);
            }
        }
        return maxLen;
    };

    let maxSum = 0;
    for(const [n1, n2] of twoCycles){
        maxSum += bfs(n1, n2) + bfs(n2, n1) + 2
    }

    return Math.max(maxSum, longest); // max of longest closed circle or the longest none closed

}