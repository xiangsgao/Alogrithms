/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = new Map();
    for(let i = 0; i < s.length; i++){
        map.set(s[i], i);
    }

    let retval = [];
    let i = 0;
    let size = 1;
    let end = 0;
    while(i < s.length){
        end = Math.max(end, map.get(s[i]));
        if(i === end){
            retval.push(size);
            size = 1;
        }else{
            size += 1;
        }
        i++;
    };

    return retval;
};