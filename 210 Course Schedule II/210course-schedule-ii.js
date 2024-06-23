

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function(numCourses, prerequisites) {
    
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

    let result = [];

    const dfs = (course) =>{
        if(visited.has(course)){
            return false;
        }

        if(map.get(course).length === 0){
            if(!result.includes(course)){
                result.unshift(course);
            }
            return true;
        }

        visited.add(course);
        for(const preq of map.get(course)){
           if(!dfs(preq)){
                return false;
           }; 
        }
        if(!result.includes(course)){
            result.push(course);
        }
      
        visited.delete(course)
        map.set(course, []);
        return true;
    }

    
 

    for(const course of map.keys()){
        if(!dfs(course)){
            return [];
        }
    }

    for(let i = 0; result.length < numCourses; i++){
        if(!result.includes(i)){
            result.unshift(i);
        }
    }

    return result;
};