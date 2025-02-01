// /**
//  * @param {string[]} words
//  * @param {string} target
//  * @return {number}
//  */


// class Trie{
//     constructor(){
//         this.node = {}
//         this.prefixes = new Set();
//     }

//     addWord(word){
//         let cur = this.node;
//         let str = "";
//         for(const c of word){
//             str += c;
//             this.prefixes.add(str);
//             const child = cur[c] ?? {};
//             cur[c] = child;
//             cur = child;
//         }
//     }

//     hasPrefix(w){
//         return this.prefixes.has(w) ? 1 : Infinity;
//     }

//     findMin(w){
//        let min = Infinity; 
//        const root = this.node;
//        const dfs = (node, i, count)=>{
//           if(i === w.length){
//             min = Math.min(count, min);
//             return;
//           }


         
//           const c = w[i];

//           const child = node[c];
//           // dead end
//           if(child === undefined && node === root){
//             return;
//           } 

//           // two decision, keep going or start a new prefix
          
//           // keep going
//           if(child !== undefined){
//             dfs(child, i + 1, count);
//           }
          

//           // new prefix 
//           dfs(root, i + 1, count + 1);
//        }

//        dfs(this.node, 0, 1);
//        return min === Infinity? -1 : min;
//     }
// }

// var minValidStrings = function(words, t) {


//    const trie = new Trie();
//    for(const word of words){
//     trie.addWord(word);
//    }

//        // dp not efficient enough
// //    const dp = Array(t.length).fill(Infinity);
// //    dp[0] = trie.hasPrefix(t[0]);
    
// //    for(let i = 1; i < t.length; i++){
// //         for(let j = i - 1; j >= -1; j--){
// //             const firstHalfMin = dp[j] ?? 0;
// //             const secondHalf = t.substring(j + 1, i + 1);
// //             const secondHalfMin = trie.hasPrefix(secondHalf);
// //             dp[i] = Math.min(secondHalfMin + firstHalfMin, dp[i]);
// //         }
// //    }

    
// //    const res = dp.pop();
// //    if(res === Infinity){
// //     return -1;
// //    }

// //    return res;


//     return trie.findMin(t);
// };

// failed to understand this shit
// got some idea. make a note to code my own solution in the future
var minValidStrings = function(words, target) {
    const aCode = 97
    function getLetter(str, i) {
        return str.charCodeAt(i) - aCode
    }

    const root = []
    for (const word of words) {
        const size = word.length
        for (let i = 0, p = root; i < size; i++) {
            const letter = getLetter(word, i)
            const existing = p[letter]
            if (existing !== undefined) {
                p = existing
            } else {
                const node = []
                p[letter] = node
                p = node
            }
        }
    }


    const len = target.length
    const table = new Array(len + 1)
    table[len] = 0
    
    function dp(fromIndex) {
        const existing = table[fromIndex]
        if (existing !== undefined) return existing

        let result = Infinity
        // this goes from the left, getting the min of the left half
        for (let i = fromIndex, p = root; i < len; i++) {
            const letter = getLetter(target, i)
            const node = p[letter]
            if (node === undefined) {
                break
            }
            p = node

            const subresult = dp(i + 1)
            // this goes from the right, getting the result of the right half
            const outcome = 1 + subresult
            result = Math.min(result, outcome)
        }

        return table[fromIndex] = result
    }


    let result = dp(0)
    if (result === Infinity)    result = -1
    return result
};