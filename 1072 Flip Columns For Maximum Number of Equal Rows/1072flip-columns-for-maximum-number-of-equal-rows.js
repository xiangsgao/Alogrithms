/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
   
   const count = new Map();
   for(row of matrix){
    let rowKey = row.map(e => e.toString());
    if(rowKey[0] === "1"){
        rowKey = rowKey.map(e => e === "0" ? "1" : "0");
    }

    rowKey = rowKey.join("");
    count.set(rowKey, (count.get(rowKey) ?? 0 ) + 1);
   }

  

   return Math.max(...count.values());

};

/**

    [
        [1,1],
        [0,0]
    ]
 */