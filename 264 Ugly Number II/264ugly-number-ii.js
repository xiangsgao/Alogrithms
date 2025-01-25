/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {


    const pq = new PriorityQueue({
        compare: (a, b) => a - b
    });

    pq.enqueue(1); 


    const nums = [1];
    let [i2, i3, i5] = [0,0,0];
    
    for(let i = 1; i < n; i++){
        const nextNum = Math.min(
            nums[i2] * 2, nums[i3] * 3, nums[i5] * 5
        );
        nums.push(nextNum);
        if(nextNum === nums[i2] * 2){
            i2+=1;
        }

        if(nextNum === nums[i3] * 3){
            i3+=1;
        }   


        if(nextNum === nums[i5] * 5){
            i5+=1;
        }      
    }

    

    return nums.pop();

};