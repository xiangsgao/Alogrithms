/**
 * @param {Object|Array} obj1
 * @param {Object|Array} obj2
 * @return {Object|Array}
 */
function objDiff(obj1, obj2, ) {
    const dfs = (x, y,top = false) =>{
        if(Array.isArray(x) && Array.isArray(y)){
            const maxLength = Math.max(x.length, y.length);
            const res = {};
            for(let i = 0; i < maxLength; i++){
                const one = x[i];
                const two = y[i];
                if(one === undefined || two === undefined){
                    continue;
                }
               const e = dfs(one, two); 
               if(e){
                res[i] = e;
               }
            }
            return Object.keys(res).length ? res : undefined;
        }

        if(x && y && (typeof x === "object") && (typeof y === "object")){
            
             if(Array.isArray(x) || Array.isArray(y)){
                return [x, y];
             }
            const retval = {};
            const keys = Object.keys(x);
            for(const key of keys){
                if(x[key] === undefined || y[key] === undefined){
                    continue;
                }

                const e = dfs(x[key], y[key]);
               
                 if(e){
                    retval[key] = e;    
                }
            }

            if(Object.keys(retval).length === 0){
                return top ? {} : undefined;
            }
            return retval;
        }

        if(x === y){
            return;
        }

        return [x, y];
    }

    return dfs(obj1, obj2, true);
};