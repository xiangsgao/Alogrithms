class EventEmitter {
    cb = {};
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const cur = this.cb[eventName] ?? new Set();
        cur.add(callback);
        this.cb[eventName] = cur;
        return {
            unsubscribe: () => {
                this.cb[eventName].delete(callback);
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const res = [];
        for(const fn of (this.cb[eventName] ?? new Set()).values()){
            res.push(fn(...args));
        }
        return res;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */