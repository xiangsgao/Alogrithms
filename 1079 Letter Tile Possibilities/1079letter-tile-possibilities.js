/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const unique = new Set();

    const picked = new Map();
    const bk = (cur = "") =>{

        if(unique.has(cur)){
            return;
        }

        unique.add(cur);
        
        if(picked.size === tiles.length){
            return;
        }
        
        for(let i = 0; i < tiles.length; i++){
            if(picked.has(i)){
                continue;
            }

            picked.set(i, true);
            bk(cur + tiles[i]);
            picked.delete(i);
        }
    }

    bk();

    return unique.size - 1;
};