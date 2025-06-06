/**
 * @param {string} s
 * @return {string}
 */
 // the key for this problem is to keep count of the frequency
 // then keep track of what the minimum frequency is current in the frequency map
 // decrement the frequency as character is push onto t
var robotWithString = function(s) {
    s = s.split("");
    let p = [];
    let t = [];
    
    const freqCount = s.reduce((acc, e) =>{
        acc[e] = (acc[e] ?? 0) + 1;
        return acc;
    }, {})

    let minChar = 'a';
    for(const c of s){
        t.push(c);

        freqCount[c] -= 1;

        while(minChar !== 'z' && !freqCount[minChar]){
            const ord = minChar.charCodeAt(0) + 1;
            minChar = String.fromCharCode(ord);
        }

        while(t.length && t.at(-1) <= minChar){
            p.push(t.pop());
        }
    }

    return p.join("");
};