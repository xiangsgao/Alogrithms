/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    if(nums.length === 1){
        return nums[0] * nums[0];
    }
    
    const getGcd = (a, b) => {
        while (b > 0)
        {
            const temp = b;
            b = a % b; // % is remainder
            a = temp;
        }
        return a;
    }

    const getLcm = (a, b) =>{
        return (a * b) / getGcd(a, b);
    }

    const getSetGcd = (omit) =>{
        let start = omit === 0 ? 1 : 0;
        let answer = nums[start];
        for(let i = 1; i < nums.length; i++){
            if(i === omit){
                continue;
            }
            answer = getGcd(answer, nums[i]);
        }

        return answer;
    }

    const getSetLcm = (omit) =>{
        let start = omit === 0 ? 1 : 0;
        let answer = nums[start];
        for(let i = start + 1; i < nums.length; i++){
            if(i === omit){
                continue;
            }
            answer = getLcm(answer, nums[i]);
        }

        return answer;
    }

    let res = -Infinity;
    for(let i = 0; i < nums.length; i++){
        test = getSetLcm(i) * getSetGcd(i);
        res = Math.max(test, res);
    }

    res = Math.max(getSetLcm(Infinity) * getSetGcd(Infinity), res);
    return res;

    
};