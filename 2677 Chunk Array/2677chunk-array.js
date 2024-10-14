/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const retval = [];
    
    while(arr.length){
        const newArr = [];
        for(let i = 0; i < size && arr.length; i++){
            newArr.push(arr.shift());
        }
        retval.push(newArr);
    }

    return retval;
};
