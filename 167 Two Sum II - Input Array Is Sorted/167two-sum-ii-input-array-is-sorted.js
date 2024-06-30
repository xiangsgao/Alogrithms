/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        let leftE = numbers[left];
        let rightE = numbers[right];
        const sum = leftE + rightE;
        if(sum === target){
            return [++left, ++right];
        }

        if(sum < target){
            left++;
        }else{
            right--;
        }
    }

    return [];
};