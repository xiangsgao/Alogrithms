/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    

    const sums = [];
    let sum;
    for(let i = 0; i < nums.length - k + 1; i++){
        if(i === 0){
            let acc = 0;
            for(let i = 0; i < k; i++){
                acc += nums[i];
            }
            sum = acc;
            sums[i] = acc;
        }else{
            sum -= nums[i - 1];
            sum += nums[i + k - 1];
            sums[i] = sum;
        }
    }

    const dp = new Map();
    const recursive = (i, count) =>{

        if(count === 3 || i > nums.length - k){
            return 0;
        }

        const key = `${i},${count}`
        if(dp.has(key)){
            return dp.get(key);
        }

        // include
        const include = sums[i] + recursive(i + k, count + 1);

        // skip
        const skip = recursive(i + 1, count);

        dp.set(key, Math.max(skip, include));
        return dp.get(key);
    }

    const getIdx = () =>{
       let i = 0;
       const indices = [];

       while(i < nums.length - k + 1 && indices.length < 3){
            const include = sums[i] + recursive(i + k, indices.length + 1);
            const skip = recursive(i + 1, indices.length);

            if(include >= skip){
                indices.push(i);
                i += k;
            }else{
                i += 1;
            }
       }

       return indices;
    }

    return getIdx();
};