/**
 * @param {number[]} nums
 * @return {number[]}
 */


var sortArray = function(nums) {
    const combinedArr = (arr1, arr2) =>{
        const retval = [];
        while(arr1.length || arr2.length){
            const n1 = arr1[0];
            const n2 = arr2[0];
            if(n1 !== undefined && n2 !== undefined){
                if(n1 < n2){
                    retval.push(arr1.shift());
                }else{
                    retval.push(arr2.shift());
                }
            }
            else if(n1 === undefined){
                retval.push(arr2.shift());
            }else if (n2 === undefined){
                retval.push(arr1.shift());
            }
        }

        return retval;
    }

    const mergeSort = (arr = nums) =>{
        if(arr.length === 1 || arr.length === 0){
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const firstHalf = arr.slice(0, mid);
        const secondHalf = arr.slice(mid, arr.length);
        const orderedFirst = mergeSort(firstHalf);
        const orderedSecond = mergeSort(secondHalf);
        const retval = combinedArr(orderedFirst, orderedSecond);
        return retval;
    }

    return mergeSort();

};