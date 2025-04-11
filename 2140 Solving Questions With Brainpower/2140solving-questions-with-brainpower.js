/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {

    const cache = new Map();
    const recursive = (i = 0) =>{
        if(i >= questions.length){
            return 0;
        }
        if(cache.has(i)){
            return cache.get(i);
        }
        
        const [points, skip] = questions[i];
        const retval = Math.max(
            // skip 
            recursive(i + 1),
            // dont skip
            points + recursive(i + 1 + skip)
        );
        cache.set(i, retval);
        return retval;
    }

    return recursive();
};