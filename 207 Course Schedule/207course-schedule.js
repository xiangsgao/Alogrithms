class Node {
    constructor(val = 0, depedencies = []){
        this.val = val;
        this.depedencies = dependencies;
    }
}


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    const map = new Map();
    const visited = new Set();

    for(const [course, req] of prerequisites){
        const cur = map.get(course) ?? [];
        if(!cur.includes(req)){
            cur.push(req);
        }

        if(!map.has(req)){
            map.set(req, []);
        }

        map.set(course, cur)
    }

    const dfs = (course) =>{
        if(visited.has(course)){

            return false;
        }

        if(map.get(course).length === 0){
            return true;
        }

        visited.add(course);
        for(const preq of map.get(course)){
            if(!dfs(preq)){
                return false;
            }    
        }
        visited.delete(course)
        map.set(course, []);
        return true;
    }

    
 

    for(const course of map.keys()){
        if(!dfs(course)){
            return false;
        }
    }

    return true;
};