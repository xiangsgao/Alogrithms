/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function(edges) {
    const adj = new Map();

    for(const edge of edges){
        const [node, child] = edge;
        const cur = adj.get(node) ?? [];
        cur.push(child);
        adj.set(node, cur);

        const cur2 = adj.get(child) ?? [];
        cur2.push(node);
        adj.set(child, cur2);
    }

    let retval = 0;
    const recursive = (node = 0, parent = null) =>{

        const children = adj.get(node).filter(e => e !== parent);
        if(children.length === 0){
            retval++;
            return 1;
        }
       
        const firstDescendantsNum = recursive(children[0], node);
        let totalChildrenNum = firstDescendantsNum;
        let sameSize = true;
        for(let i = 1; i < children.length; i++){
            const child = children[i];
            const childNum = recursive(child, node);
            totalChildrenNum += childNum;
            sameSize = sameSize && (childNum === firstDescendantsNum);
        }
       
        if(sameSize){
            retval++;
        }

        return 1 + totalChildrenNum;
    }

    recursive();
    return retval;
    
};