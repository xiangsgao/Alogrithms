/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let isThrottle = false;
    let nextArgs;

    const cb = ()=>{
        if(nextArgs){
            fn(...nextArgs);
            isThrottle = true;
            nextArgs = undefined;
            setTimeout(cb, t);
        }else{
            isThrottle = false;
        }
    }

    return function(...args) {
       if(isThrottle){
        nextArgs = args;
       }else{
        fn(...args);
        isThrottle = true;
        setTimeout(cb, t);
       }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */