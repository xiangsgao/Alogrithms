/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    supplies = new Set(supplies);
    recipes = recipes.reduce((acc, e, i) => {
        acc.set(e, i);
        return acc;
    }, new Map())
    const res = [];
    const visited = new Set();
    const canCreate = (recipe)=>{
        if(supplies.has(recipe)){
            return true;
        }

        if(visited.has(recipe)){
            return false;
        }

        visited.add(recipe);
        
        const idx = recipes.get(recipe);

        const absentIngredients = ingredients[idx].filter(e => {
            return !supplies.has(e) && !(recipes.has(e) && canCreate(e));
        });


       if(absentIngredients.length){
            return false;
       }
       
       visited.delete(recipe);
       supplies.add(recipe);

       return true;
        
    }

    for(const e of recipes.keys()){
        if(canCreate(e)){
            res.push(e);
        }
    }

    return res;
};