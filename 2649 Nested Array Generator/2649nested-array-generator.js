/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    let i = 0;
    while(i < arr.length){
        const res = arr[i];
        if(Array.isArray(res)){
            const gen = inorderTraversal(res);
            do{
                const next = gen.next();
                if(next.done){
                    break;
                }
                yield next.value;
            }while(true);
        }else{
            yield res;
        }

        i++;
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */