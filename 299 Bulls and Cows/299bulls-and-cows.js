/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    // bull = correct positions
    const N = secret.length;
    let bull = 0;
    let crow = 0;
    const frequencySecret = new Map();
    const frequencyGuess = new Map();
    for(let i = 0; i < N; i++){
        const s = secret[i];
        const g = guess[i];
        if(s === g){
            bull++;
        }else{
            frequencySecret.set(s, (frequencySecret.get(s) ?? 0) + 1);
            frequencyGuess.set(g, (frequencyGuess.get(g) ?? 0) + 1);
        }
    }

    
    for(const key of frequencySecret.keys()){
        if(frequencyGuess.get(key)){
            const decrement = Math.min(frequencyGuess.get(key), frequencySecret.get(key));
            frequencyGuess.set(key, frequencyGuess.get(key) - decrement);
            frequencySecret.set(key, frequencySecret.get(key) - decrement);
            crow+=decrement;
        }
    }
    
    return `${bull}A${crow}B`;

};