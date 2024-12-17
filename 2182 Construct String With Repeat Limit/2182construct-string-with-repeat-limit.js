/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {

    const count = new Map();

    for(const c of s){
        count.set(c, (count.get(c) ?? 0)+ 1);
    }

    const queue = new PriorityQueue({
        compare: (a, b) => b[1].localeCompare(a[1])
    });

    for(const key of count.keys()){
        queue.enqueue([count.get(key), key]);
    }
    
    let retval = "";
    while(!queue.isEmpty()){

         let [count, c] = queue.dequeue();


         if(c === retval[retval.length - 1]){
            if(queue.isEmpty()){
                break;
            }

            let [count2, c2] = queue.dequeue();
            retval += c2;
            count2 -= 1;
            if(count2){
                queue.enqueue([count2, c2]);
            }
         }

         const repeat = Math.min(count, repeatLimit)
         retval += c.repeat(repeat);
         count -= repeat;
         if(count){
            queue.enqueue([count, c]);
         }


        
    }

    return retval;

};