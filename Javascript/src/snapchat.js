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

// [employeeId, managerId, name]
const testData = [
    [8, 8, "CEO"],
    [7, 8, "Manager1"],
    [6, 7, "Employee1"],
    [5, 6, "Intern1"],
    [4, 8, "Manager2"],
    [3, 4, "Employee2"],
    [2, 3, "Intern2"],
    [1, 3, "Intern3"],
    [0, 4, "Employee3"],
    [-1, 8, "CEO's Assistant"]
]

const createMapEntry = (data, map) =>{
    const [id, managerId, name] = data;
    const val = {
        managerId, name, subordinates: new Set()
    };
    map.set(id, val);
    return map.get(id);
}

const solution = () =>{
    // first need to construct a map with key = employee id, and value = { managerId, name, subordinates: set of employeeIds }
    const map = new Map();

    for(const data of testData){
        const [id, managerId] = data;
        createMapEntry(data, map);
        if(id !== managerId){
            const manager = map.get(managerId) ?? createMapEntry(testData.find(([id]) => id === managerId ), map);
            manager.subordinates.add(id);
        }
    }

    /**
     * map looks like this
     *  {
     *   8 => { managerId: 8, name: 'CEO', subordinates: Set(3) { 7, 4, -1 } },
     *   7 => { managerId: 8, name: 'Manager1', subordinates: Set(1) { 6 } },
     *   6 => { managerId: 7, name: 'Employee1', subordinates: Set(1) { 5 } },
     *   5 => { managerId: 6, name: 'Intern1', subordinates: Set(0) {} },
     *   4 => { managerId: 8, name: 'Manager2', subordinates: Set(2) { 3, 0 } },
     *   3 => { managerId: 4, name: 'Employee2', subordinates: Set(2) { 2, 1 } },
     *   2 => { managerId: 3, name: 'Intern2', subordinates: Set(0) {} },
     *   1 => { managerId: 3, name: 'intern3', subordinates: Set(0) {} },
     *   0 => { managerId: 4, name: 'Employee3', subordinates: Set(0) {} },
     *   -1 => { managerId: 8, name: "CEO's Wife", subordinates: Set(0) {} }
     * }
     */

    // now dfs to get the console out string, starting from the CEO. CEO is the ceo if the employee id and the manager id are the same
    const ceoId = [...map.keys()].find((key) =>{
        const {managerId} = map.get(key);
        return key === managerId;
    });


    const dfs = (id = ceoId, level = 0) =>{
        const val = map.get(id);
        const subordinates = val.subordinates;
        if(subordinates.size === 0){
           return "\t".repeat(level) + val.name;
        }

        const subordinatesString = [];
        for(const subId of subordinates){
            subordinatesString.push(dfs(subId, level + 1))
        }
        const tabs =  "\t".repeat(level);
        let retval =  `
            ${tabs + val.name}
                ${subordinatesString.join("\n" + "\t".repeat(level))}
            ${tabs + val.name}
        `;

        return retval;

    }

    return dfs();
}

module.exports = solution;