/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
 // cant solve because it is easy to make bugs.
 // handling the leading zero in more than 1 digit numbers are a pain
 // using eval and regex to detect leading 0 is very inefficeint

 // the trick is to use a for loop in recursion instead of the combine and +, -, * decision tree to handle leading zeros and to keep another variable for the cur sum
 // multiply is the tricky case to do the cur sum

var addOperators = function(num, target) {
    const retval = [];
    const backtrack = (i, curRes, curSum, prev) =>{
       
        if(i >= num.length){
            if(curSum === target){
                retval.push(curRes.join(""));
            }
            return;
        }



        for(let idx = i; idx < num.length; idx++){
            const curStr = num.slice(i, idx + 1);
            const curNum = Number(curStr);

            if(!curRes.length){
                backtrack(idx + 1, [curStr], curNum, curNum);
            }else{
                
                backtrack(idx + 1, [...curRes,"+", curStr], curSum + curNum, curNum);
                backtrack(idx + 1, [...curRes,"-", curStr], curSum - curNum, -1 * curNum);
                backtrack(idx + 1, [...curRes,"*", curStr], curSum - prev + curNum * prev, curNum * prev);
            }

            // prevent numbers with leading zero. this make sure that string will only have 1 zero if leading
            if(num[i] === "0"){ // not sure why num[idx] === "0" failed one of the test case
                break;
            }
        }

       
    }

    backtrack(0, [], 0, 0);


    return retval;

};