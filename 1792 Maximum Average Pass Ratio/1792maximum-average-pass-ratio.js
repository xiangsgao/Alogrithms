/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const queue = new PriorityQueue({
        compare: (a, b) =>{
            return a[0] - b[0];
        }  
    });

    for(const e of classes){
        const dif = e[0] / e[1] - (e[0] + 1) / (e[1] + 1);
        queue.enqueue([dif, ...e]);
    }

    for(let i = 0; i < extraStudents; i++){
        let [_, p , t] = queue.dequeue();
        t += 1;
        p += 1;
        const dif = p / t - (p + 1) / (t + 1);
        queue.enqueue([dif, p, t]);
    }

    const res = queue.toArray().reduce((acc, e) => e[1] / e[2] + acc, 0) / classes.length

    return res;
};