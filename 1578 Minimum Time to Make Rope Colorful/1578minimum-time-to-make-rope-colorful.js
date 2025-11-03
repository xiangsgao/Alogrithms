/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
 // solved it
 // pretty simple medium, just use a que to keep track of the minimum consecutive ballons
var minCost = function(colors, neededTime) {
    

    let i = 0;
    let total = 0;
    while(i < colors.length){

        const que = new PriorityQueue((a, b) => a - b)
        que.enqueue(neededTime[i]);
        while(i + 1 < colors.length && colors[i + 1] === colors[i]){
            que.enqueue(neededTime[i + 1]);
            i++;
        }

        while(que.size() > 1){
            total += que.dequeue();
        }
        i++;
    }



    return total;
};