/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    
    let picked = 0;
    const backtrack = (nums, limit, num) =>{

        if(limit >= nums.length){
            return picked === num;
        }

        for(let i = limit + 1; i <= nums.length; i++){
            const pickedNum = Number(nums.slice(limit, i).join(""));
            picked += pickedNum;
            const valid = backtrack(nums, i, num);
            picked -= pickedNum;
            if(valid){
                return valid;
            }
        }

        return false;
    }
    
    let res = 0;
    for(let i = 1; i <= n; i++){
        const nums = (i * i).toString().split("");
        if(backtrack(nums, 0, i)){
            res += (i * i);
        }
    }

    return res;
};