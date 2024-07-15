/**
 * CEO
 *      Manager1
 *          Employee1
 *              Intern1
 *          Employee2
 *      Manager1
 *      Manager2
 *          Employee2
 *              Intern2
 *              Intern3
 *          Employee2
 *          Employee3
 *      Manager2
 *      CEO's Wife
 * CEO
 */

const testData = [
    [8, 8, "CEO"],
    [7, 8, "Manager1"],
    [6, 7, "Employee1"],
    [5, 6, "Intern1"],
    [4, 8, "Manager2"],
    [3, 4, "Employee2"],
    [2, 3, "Intern2"],
    [1, 3, "intern3"],
    [0, 4, "Employee3"],
    [-1, 8, "CEO's Wife"]
]


const solution = () =>{
    // first need to construct a map with key = employee id, and value = { managerId, name, subordinates }
    const map = new Map();

}

module.exports = solution;