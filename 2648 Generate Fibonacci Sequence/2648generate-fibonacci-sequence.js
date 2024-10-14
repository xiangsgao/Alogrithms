/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let prev = 0;
    let cur = 1;
    let i = 0;
    while(true){
        if(i === 0){
            i++;
            yield prev;
        }

        if(i === 1){
            i++;
            yield cur;
        }

        const temp = prev;
        prev = cur;
        cur = cur + temp;
        i++;
        yield cur;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */