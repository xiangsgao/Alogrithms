/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let level = 0;
    for(const log of logs){
       
        switch(log){
            case "./":
                break;
            case "../":
                level = level === 0 ? 0 : level - 1;
                break;
            default:
                level += 1;
        }

         
        
    }

    return level;
};