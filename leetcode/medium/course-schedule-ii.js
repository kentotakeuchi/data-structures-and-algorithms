// https://leetcode.com/problems/course-schedule-ii/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// MINE
// var findOrder = function(numCourses, prerequisites) {
//     if(prerequisites.length === 0) return [0]
// };

// ANSWER
let visiting;
let visited;
let graph;
let result;

var findOrder = function (numCourses, prerequisites) {
  visiting = new Set();
  visited = new Set();
  graph = new Map();
  result = new Set(); // to avoid duplicate result

  // this is not needed as to only meet the test case requirement
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }
  // above part can be ignored

  for (let [v, e] of prerequisites) {
    if (graph.has(v)) {
      let tmp = graph.get(v);
      tmp.push(e);
      graph.set(v, tmp);
    } else {
      graph.set(v, [e]);
    }
  }

  for (let [v, edges] of graph) {
    if (DFS(v)) {
      return []; // if cyclic return empty array
    }
  }

  return [...result];
};

var DFS = function (v) {
  visiting.add(v);
  let edges = graph.get(v);

  if (edges) {
    for (let e of edges) {
      if (visited.has(e)) {
        continue; // skip if already visited
      }

      if (visiting.has(e)) {
        return true; // cyclic is true so return [] above
      }

      if (DFS(e)) {
        return true;
      }
    }
  }

  visiting.delete(v);
  visited.add(v);
  result.add(v);

  return false;
};
