/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let cur = init;
    const increment = () =>{
        return ++cur;
    }

    const reset = ()=>{
        cur = init;
        return cur;
    }

    const decrement = () =>{
        return --cur;
    }

    return {
        increment,
        decrement,
        reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */