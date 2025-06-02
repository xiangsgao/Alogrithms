/**
 * @param {number[]} ratings
 * @return {number}
 */
 // idea is to first give everyone a candy
 // then go from left to right making sure each right has more candies than the previous left if it has high rating
 // then go from right to left making sure each left has more candies than the right if it has higher ratings
var candy = function(ratings) {
    
    const candies = Array(ratings.length).fill(1);
    for(let i = 1; i < ratings.length; i++){

        const prev = ratings[i - 1];
        const cur = ratings[i];

        if(cur > prev){
            candies[i] = candies[i - 1] + 1;
        }
    }

    for(let i = ratings.length - 2; i >= 0; i--){

        const prev = ratings[i + 1];
        const cur = ratings[i];

        if(cur > prev && candies[i] <= candies[i + 1]){
            candies[i] = candies[i + 1] + 1;
        }
    }

    return candies.reduce((acc, e) => acc + e, 0);
};