/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    const cache = {};
    const recursive = (i)=>{
        if(i === books.length){
            return 0;
        }

        if(cache[i]){
            return cache[i]
        }

        let curWidth = shelfWidth;
        let maxHeight = 0;
        cache[i] = Infinity;
        for(let j = i; j < books.length; j++){
            const [width, height] = books[j];
            if(curWidth < width){
                break;
            }
            curWidth -= width;
            maxHeight = Math.max(maxHeight, height);
            cache[i] = Math.min(cache[i], recursive(j + 1) + maxHeight) 
        }

        return cache[i];
    }

    return recursive(0);
};