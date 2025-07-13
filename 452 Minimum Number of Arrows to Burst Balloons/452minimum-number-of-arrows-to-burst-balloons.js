/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    
    points = points.sort(([a], [b]) => a - b);
    let prevEnd = points[0][1];
    let res = 1;
    for(let i = 1; i < points.length; i++){
        const start = points[i][0];
        const end = points[i][1];
        if(start <= prevEnd){
             prevEnd = Math.min(end, prevEnd);
        }else{  
          res += 1;
          prevEnd = end;
        }
       
    }

    return res;

// [1, 10], [3, 9]

};