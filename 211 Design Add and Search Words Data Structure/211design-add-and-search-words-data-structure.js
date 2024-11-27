
class WordDictionary {

    constructor(){
        this.map = {
            word: "",
        };
    }    

    addWord(word){


        let curNode = this.map;
        for(const c of word){
            const child = curNode[c] ?? {};
            child.word = curNode.word + c;
            curNode[c] = child;
            curNode = child;
        }

        curNode.end = true;
    }

    search(word){
       
       const dfs = (curNode = this.map, position = 0) => {


            if(position === word.length){
                if(curNode.end){
                    return true;
                }
                return false;
            }

            const curC = word[position]
            if(curC === "."){
                for(const key in curNode){
                    if(key === "word" || key === "end"){
                        continue;
                    }
                    const res = dfs(curNode[key], position + 1);
                    if(res){
                        return true;
                    }
                }

                return false;
            }


            // handle if none . and child does not exist
            if(curNode[curC] === undefined){
                return false;
            }

            // if none . and child exists
            return dfs(curNode[curC], position + 1);

       }

       return dfs();
    }
};
// const wordDictionary = new WordDictionary();
// wordDictionary.addWord("apple")