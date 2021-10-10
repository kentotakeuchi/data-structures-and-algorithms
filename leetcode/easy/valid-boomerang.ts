// https://leetcode.com/problems/valid-boomerang/

// MINE..
/*
function isBoomerang(points: number[][]): boolean {

};
*/

// ANSWER..: not working
/*
function isBoomerang(points: number[][]): boolean {
    let [[x1, y1], [x2, y2], [x3, y3]] = points;
    if  ((x1 == x2 && y1 == y2) ||
        (x1 == x3 && y1 == y3) ||
        (x2 == x3 && y2 == y3)) return false;
    return ((y2-y1) / (x2-x1) !== (y3-y2) / (x3-x2));
}
*/

// ANSWER: shoelace formula
/*
function isBoomerang(points: number[][]): boolean {
    let p = points
    let polygonA;
    let polygonB;
    polygonA = 
        (p[0][0] * p[1][1]) + 
        (p[1][0] * p[2][1]) + 
        (p[2][0] * p[0][1]);
    polygonB = 
        (p[0][1] * p[1][0]) +
        (p[1][1] * p[2][0]) +
        (p[2][1] * p[0][0]);
    return Math.abs(polygonA - polygonB) !== 0
}
*/

// ANSWER
/**
Assuming three points are A, B, C.

The first idea is that, calculate the area of ABC.
We can reuse the conclusion and prove in 812. Largest Triangle Area

The other idea is to calculate the slope of AB and AC.
K_AB = (p[0][0] - p[1][0]) / (p[0][1] - p[1][1])
K_AC = (p[0][0] - p[2][0]) / (p[0][1] - p[2][1])

We check if K_AB != K_AC, instead of calculate a fraction.

Time O(1) Space O(1)
*/
function isBoomerang(p: number[][]): boolean {
  return (p[0][0] - p[1][0]) * (p[0][1] - p[2][1]) != (p[0][0] - p[2][0]) * (p[0][1] - p[1][1])
}
