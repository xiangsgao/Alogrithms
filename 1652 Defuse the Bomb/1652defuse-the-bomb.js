/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if(k === 0){
        return code.map(() => 0);
    }


    const itr = Math.abs(k); 
    
    const getSum = (idx, k) =>{
        let sum = 0;
        let times = Math.abs(k);
        if(k < 0){
            idx--;
            while(times > 0){
                if(idx < 0){
                    idx = code.length - 1;
                }
                const cur = code[idx--];
                sum += cur;
                times--;
             }
        }else{
             idx++;
             while(times > 0){
                if(idx >= code.length){
                    idx = 0;
                }
                const cur = code[idx++];
                sum += cur;
                times--;
             }
            
        }
       return sum;
    }

    const res = [];
    for(let i = 0; i < code.length; i++){
        res.push(getSum(i, k));
    }

    return res;
};