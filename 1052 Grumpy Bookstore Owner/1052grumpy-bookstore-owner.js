/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    const N = customers.length;

    const prefix = Array(N).fill(0);

    let totalHappy = 0;
    let left = 0;
    let unhappyCustomer = 0;
    let maxUnhappy = 0;
    for(let right = 0; right < N; right++){
        
        const happy = customers[right] * (grumpy[right] === 0 ? 1 : 0);
        const unhappy = customers[right] * grumpy[right];

        totalHappy += happy;
        unhappyCustomer += unhappy;
        
        maxUnhappy = Math.max(maxUnhappy, unhappyCustomer);

        if(right - left + 1 === minutes){
            unhappyCustomer -= customers[left] * grumpy[left];
            left++;
        }
    }


    return totalHappy + maxUnhappy;

};