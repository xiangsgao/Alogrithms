/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


 function binarySearch(arr, x, left, right)
{    
    
  const mid = left + Math.floor((right - left) / 2);


  if(arr[mid] === x){
    return mid;
  }

  if(right < left){
    return -1;
  }


  if(arr[mid] > x){
    return binarySearch(arr, x, left, mid - 1);
  }else{
    return binarySearch(arr, x, mid + 1, right);
  }
}

const binarySearchMatrix = (mat, target, left, right) =>{

    if(right < left){
        return false;
    }
    
    
    const mid = left + Math.floor((right - left) / 2);
    const row = mat[mid];
    
    if(!row) {
        return false;
    }

    const firstElement = row[0];

    if(firstElement === undefined){
        return false;
    }


    const isInRow = binarySearch(row,target, 0, row.length - 1) !== -1;

    if(isInRow){
        return true;
    }

    if(target < firstElement){
        return binarySearchMatrix(mat, target, left, right - 1);
    }else{
        return binarySearchMatrix(mat, target, mid + 1, right);
    }
}


var searchMatrix = function(matrix, target) {
    return binarySearchMatrix(matrix, target, 0, matrix.length - 1);
};  


//console.log(binarySearch([23,34,56,78,99,123], 234, 0 , 5));