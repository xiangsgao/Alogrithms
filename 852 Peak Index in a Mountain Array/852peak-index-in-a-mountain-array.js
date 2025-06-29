/**
 * @param {number[]} arr
 * @return {number}
 */

 // couldnt solve because i was stupid
 // if mid is less than its next element, search right
 // else search left
var peakIndexInMountainArray = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    let mid = -1;

    while(l <= r){
        mid = l + Math.floor((r - l) / 2);
        if(arr[mid] < arr[mid + 1]){
            l = mid + 1;
        }else {
            r = mid - 1;
        }
    }

    return l;
};