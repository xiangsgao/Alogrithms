/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const groups = new Map();

    for(const str of strings){
        let hash = "";
        const firstCharCode = str.charCodeAt(0);
        const distanceFromA = Math.abs("z".charCodeAt(0) - firstCharCode + 1);
        for(const c of str){
            let ordC = c.charCodeAt(0) - "a".charCodeAt(0);
            ordC = (ordC + distanceFromA) % 26;
            const newC = letters[ordC];
            hash += newC;
        }

        const list = groups.get(hash) ?? [];
        list.push(str);
        groups.set(hash, list);
    }

    return [...groups.values()];


};