/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = [];
    const recursive = (curArr = arr, curDepth = 0) =>{
        if(curDepth === n + 1){
            res.push(curArr);
            return;
        }
        
        for(const e of curArr){
            if(Array.isArray(e)){
                recursive(e, curDepth + 1);
            }else{
                res.push(e);
            }
            
        }
    }

    recursive();
    return res;
};