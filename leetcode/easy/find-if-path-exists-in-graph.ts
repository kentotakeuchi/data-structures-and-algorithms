// https://leetcode.com/problems/find-if-path-exists-in-graph/

// MINE..
/*
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const seen = new Map()
    for(let [u, v] of edges) {
        console.log(seen.get(u))
        console.log(seen.get(v))
        seen.set(u, seen.get(u) ? [...seen.get(u), v] : [v])
        seen.set(v, seen.get(v) ? [...seen.get(v), u] : [u])
    }
    console.log({seen})
    
    return true
};
*/

// ANSWER..: dfs map set
// Runtime Error Message: process exited with signal SIGSEGV
/*
function validPath(n: number, edges: number[][], start: number, end: number): boolean {
    // Create a hashmap to be used as our adjacency list
    const graph = new Map();
    
    // Create a set to store our visited nodes
    const visited = new Set();
    
    // Build adjacency list (undirected)
    for (const [u, v] of edges) {
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        if (!graph.has(v)) {
            graph.set(v, []);
        }
        
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
        
    // Define a recursive DFS helper
    function dfs(v) {
        // Add to visited set
        visited.add(v);
                
        // Get adjacent vertices
        const edges = graph.get(v);
                
        // For all adjacent vertices, run DFS
        if (edges && edges.length > 0) {
            for (const e of edges) {
                if (!visited.has(e)) dfs(e);
            }
        }
    }
        
    // DFS from starting input node
    dfs(start);
        
    // Return true/false if our visited set has our end node
    return visited.has(end);
};
*/

// ANSWER: iterative queue
function validPath(n: number, edges: number[][], start: number, end: number): boolean {
  const graph = new Map()
  // create our adjacency list
  edges.forEach(([a, b]) => {
    if (!graph.has(a)) {
      graph.set(a, [])
    }
    if (!graph.has(b)) {
      graph.set(b, [])
    }
    graph.get(a).push(b)
    graph.get(b).push(a)
  })
  // prevent revisiting nodes
  const visited = new Array(n)
  const queue = [start]
  while (queue.length > 0) {
    const node = queue.shift() // this is an O(n) operation here. if we used a real queue the dequeue method would be O(1)
    if (node === end) {
      return true
    }
    visited[node] = true
    graph.get(node).forEach(neighbor => {
      if (!visited[neighbor]) {
        queue.push(neighbor)
      }
    })
  }
  return false
}
