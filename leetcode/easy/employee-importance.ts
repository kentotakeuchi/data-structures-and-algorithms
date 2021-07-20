// https://leetcode.com/problems/employee-importance/

class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id
    this.importance = importance === undefined ? 0 : importance
    this.subordinates = subordinates === undefined ? [] : subordinates
  }
}

// MINE..
/*
function getImportance(employees: Employee[], id: number): number {
    // [id, importance, [subordinates's ids]]
	if(!employees.length) return 0
    
    let sum = 0
    
    const idx = employees.findIndex((em) => {
        console.log({em})
        return em.id === id
    })
    console.log({idx})
    
    sum += employees[idx][1]
    for(let i=0; i<employees[idx][2]; ++i) {
        sum += employees[idx][2][i]
    }
    
    return sum
};
*/

// ANSWER: dfs(recursive) using map
/*
function getImportance(employees: Employee[], id: number): number {
    const map = new Map()
    for(let e of employees) {
        map.set(e.id, e)
    }
    return dfs(id)
    
    function dfs(eid) {
        const employee = map.get(eid)
        let ans = employee.importance
            console.log({ans})

        for(let subid of employee.subordinates) {
            ans += dfs(subid)
        }
        return ans
    }
}
*/

// ANSWER: bfs(iterative) using map
function getImportance(employees: Employee[], id: number): number {
  let employeeMap = new Map()
  for (let employee of employees) {
    employeeMap.set(employee.id, { importance: employee.importance, sub: employee.subordinates })
  }

  let totalImportance = 0
  let queue = [id]

  while (queue.length > 0) {
    let currentEmployee = employeeMap.get(queue.shift())
    totalImportance += currentEmployee.importance
    queue.push(...currentEmployee.sub)
  }

  return totalImportance
}
