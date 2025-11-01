/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    
    let max = -Infinity;
    for(let i = 0; i < points.length - 2; i++){
        for(let j = i + 1; j < points.length - 1; j++){
            for(let k = j + 1; k < points.length; k++){
                const [x1,y1] = points[i];
                const [x2,y2] = points[j];
                const [x3,y3] = points[k];
                const area = (1/2) * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
                max = Math.max(max, area);
            }
        }
    }

    return max;

};