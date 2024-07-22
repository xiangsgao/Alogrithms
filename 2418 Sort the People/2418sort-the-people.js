/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const map = new Map();
    for(let i = 0; i < names.length; i++){
        map.set(i, heights[i]);
    }

    return [...map.entries()].sort(([_, height], [__, height2]) => height2 - height).map(([index]) => names[index])
};