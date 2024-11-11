/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if(object === null || object === undefined){
        return String(object);
    }

    if(Array.isArray(object)){
        const res = object.map(e=> jsonStringify(e)).join(",");
        return `[${res}]`;
    }

    if(typeof object === "object"){
        const keys = Object.keys(object);
        const res = keys.map(e => `"${e}":${jsonStringify(object[e])}`).join(",");
        return `{${res}}`;
    }

    if(typeof object === "string"){
        return `"${String(object)}"`;
    }

    return String(object);
};