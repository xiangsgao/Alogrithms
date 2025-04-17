/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 // need to binary on the possible range so couldnt figoure out, well, i did figoure brute force
var findRadius = function(houses, heaters) {
    
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    let left = 0;
    let right = Math.pow(10, 9);

    let radius = 0;

    const thisWorks = (radius) => {
        let i = 0;
        let j = 0;

        while(i < houses.length && j < heaters.length){
            if(Math.abs(heaters[j] - houses[i]) <= radius){
                i++;
            }else{
                j++;
            }
        }   
        return i === houses.length;
    }

    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);
        if(thisWorks(mid)){
            radius = mid; 
            right = mid - 1;
        }else{
            left = mid + 1;
        }

    }

    return radius;
};