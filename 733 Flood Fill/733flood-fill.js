/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    if(image[sr][sc] === color){
        return image;
    }

    const srcE = image[sr][sc];
    const dfs = (i, j) =>{
        const cur = image[i]?.[j];

        if(cur !== srcE){
            return;
        }

        image[i][j] = color;

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    dfs(sr, sc);

    return image;

};