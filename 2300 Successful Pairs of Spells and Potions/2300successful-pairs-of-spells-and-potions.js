/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
 // solved this, felt good.
 // trick is sorting and then two pointers since multiples can also be increasing so to find the least, we can keep a pointer on each array
var successfulPairs = function(spells, potions, success) {

    // 5 3 1
    // i
    // 1 2 3 4 5
    //   j

    spells = spells.map((e, i) => ({e, i})).sort((a, b) => b.e - a.e);
    potions = potions.map((e, i) => ({e, i})).sort((a, b) => a.e - b.e);

    let i = 0;
    let j = 0;

    const res = [];
    while(i < spells.length){

        while(j < potions.length && spells[i].e * potions[j].e < success){
            j++;
        }

        const total = potions.length - j;
        res[spells[i].i] = total;
        i++;
    }

    return res;
};