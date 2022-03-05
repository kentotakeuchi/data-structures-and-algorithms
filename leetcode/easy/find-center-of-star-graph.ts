// https://leetcode.com/problems/find-center-of-star-graph/

// MINE
/*
function findCenter(edges: number[][]): number {
    if(edges[0][0] === edges[1][0]) return edges[0][0]
    if(edges[0][0] === edges[1][1]) return edges[0][0]
    if(edges[0][1] === edges[1][0]) return edges[0][1]
    else return edges[0][1]
};
*/

// ANSWER
function findCenter(edges: number[][]): number {
  return edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1] ? edges[1][0] : edges[1][1]
}
