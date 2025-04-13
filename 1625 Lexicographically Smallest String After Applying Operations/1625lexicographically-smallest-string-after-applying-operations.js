/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    
    let res = s;
    const visited = new Set();

    const recursive = (cur = s) =>{

        if(visited.has(cur)){
            return;
        }
        visited.add(cur);
        if(s.localeCompare(cur) > 0){
            s = cur;
        }

        // add all the odd indices
        const oddString = cur
                            .split("")
                            .map((e, i) =>{
                                if(i % 2 === 0){
                                    return e;
                                }
                                return ((Number(e) + a) % 10).toString();
                            })
                            .join("");
        recursive(oddString);

        // rotate
        const rotateStr1 = cur.split("").slice(0, cur.length - b).join("");
        const rotateStr2 = cur.split("").slice(cur.length - b, cur.length).join("");
        const rotateStr = rotateStr2 + rotateStr1;  
        recursive(rotateStr);


    }

    recursive();
    return s;
};