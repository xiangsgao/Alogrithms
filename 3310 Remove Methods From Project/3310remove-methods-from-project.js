/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */

// failed to solved this because i failed to realize we can group the nodes into suspcious and none suspicious and if a none suspcious reaches any of the suspcious, none of the suspcious can be removed, perhaps i just do a poor job with problem prompt comprehension
var remainingMethods = function(n, k, invocations) {
    // build adj

    
    const map = new Map();
    
    for(const [from, to] of invocations){
        const cur = map.get(from) ?? [];
        cur.push(to);
        map.set(from, cur);
    }


    // find all the suspicous nodes reachable from k
    const suspicious = new Set();
    const dfsOne = (node = k) => {
        

        if(suspicious.has(node)){
            return;
        }

        suspicious.add(node);

        const children = map.get(node) ?? [];

        for(const child of children){
            dfsOne(child);
        }

    }

    dfsOne();



    // check if none suspicious can reach suspicious
    const visited = new Set();
    const dfsTwo = (node) => {
        if(visited.has(node)){
            return false;
        }
      
        if(suspicious.has(node)){
            return true;
        }

        visited.add(node);
       
        const children = map.get(node) ?? [];

        for(const child of children){
            if(dfsTwo(child)){
                return true;
            };
        }
        return false;
    }

    const res = [];
    for(let i = 0; i < n; i++){
        if(!suspicious.has(i) && dfsTwo(i)){ // if none suspicious can reach suspicious then none of the suspicious can be remove
            return Array(n).fill().map((_, i) => i);
        }else if(!suspicious.has(i)){
            res.push(i);
        } 
        
    }
    return res;

}