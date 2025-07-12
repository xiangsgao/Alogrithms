/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {

    const arr = [];
    
    const backtrack = (idx = 0) =>{

        if(idx >= num.length){
            if(arr.length < 3){
                return false;
            }
            for(let i = 2; i < arr.length; i+=1){
                if(arr[i] !== arr[i - 1] + arr[i - 2]){
                    return false;
                }
            }
            return true;
        }

        
        const firstDigit = num[idx];
        // zero could be a number
        if(firstDigit === "0"){
            arr.push(0);
            const res = backtrack(idx + 1);
            arr.pop();
            return res;
        }


        let str = "";
        for(let i = idx; i < num.length; i++){
            const cur = num[i];
            str += cur;
            // try this digit
            arr.push(Number(str));
            const valid = backtrack(i + 1);
            if(valid){
                return true;
            }
            arr.pop();

        }

        return false;
    }


    return backtrack();
};