/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {

    const parent = Array(n).fill(-1);
    const size = Array(n).fill(0);


    const find = (x) =>{
        if(parent[x] === -1){
           return x;
        }

        parent[x] = find(parent[x]);
        return parent[x];
    }

   

    const union = (x, y) =>{
       x = find(x);
       y = find(y);

       if(x !== y){
            if(size[x] < size[y]){
                parent[x] = y;
                parent[y] += size[x];
            }else{
                parent[y] = x;
                size[x] += size[y];
            }
       }
    }


 

    for(const [u,v,w] of edges){
        union(u,v);
    }


    console.log({parent})

    const componentCost = new Map();

    for(const [u,v,w] of edges){
        const root = find(u);
        
        if(!componentCost.has(root)){
            componentCost.set(root, w);
        }else{
            componentCost.set(root, componentCost.get(root) & w);
        }
    }


    const res = [];
    for(const [src, dst] of query){
        const [r1, r2] = [find(src), find(dst)];
        if(r1 !== r2){
            res.push(-1);
        }else{
            res.push(componentCost.get(r1));
        };
    }

    return res;

};