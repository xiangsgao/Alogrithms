/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(nCourses, pre, q) {

    const map = new Map();

    for(const [r, targetCourse] of pre){
        const cur = map.get(targetCourse) ?? new Set();
        cur.add(r);
        map.set(targetCourse, cur);
    }

    const finalPre = new Map();
    // dont need visited if we can guranteed no cycles
    // const visited = new Set();
    const dfs = (course) =>{
        if(finalPre.has(course)){
            return finalPre.get(course);
        }

        // if(visited.has(course)){
        //     return new Set(); // this means this has been added already
        // }

        const curFinal = new Set();
        const givenPre = map.get(course) ?? new Set();
        
        // visited.add(course);
        for(const pre of givenPre){
            curFinal.add(pre);
            const childPre = dfs(pre);
            for(const c of childPre.values()){
                curFinal.add(c);
            }
        }

        // visisted.delete(course);
        finalPre.set(course, curFinal);
        return curFinal;
    }
    

    for(let i = 0; i < nCourses; i++){
       dfs(i);
    }

    const res = [];
    for(const [pre, targetCourse] of q){
        res.push(finalPre.get(targetCourse).has(pre));
    }   

    return res;
};