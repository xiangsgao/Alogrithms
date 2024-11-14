/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
     const canDistribute = (x) =>{
        let stores = 0;
        for(const q of quantities){
            stores += Math.ceil(q / x);
        }

        return stores <= n;
     }


     let l = 1;
     let r = Math.max(...quantities);
     let res = 0;

    
    while( l <= r){
        const x = l + Math.floor((r - l) / 2);
        if(canDistribute(x)){
            res = x;
            r = x - 1;
        }else{
            l = x + 1;
        }    
    }

    return res;
};