// https://leetcode.com/problems/minimum-time-visiting-all-points/

// MINE
/*
function minTimeToVisitAllPoints(points: number[][]): number {
    let count = 0
    let [prevX, prevY] = points[0]
    let [curX, curY] = points[0]
    
    for(let i=1; i<points.length; ++i) {
        const [nextX, nextY] = points[i]
        
        while(curX !== nextX || curY !== nextY) {
            if(curX !== nextX) {
                if(curX > nextX) --curX
                if(curX < nextX) ++curX
            }
            if(curY !== nextY) {
                if(curY > nextY) --curY
                if(curY < nextY) ++curY
            }
            ++count
        }
    }
    
    return count
};
*/

// ANSWER
function minTimeToVisitAllPoints(points: number[][]): number {
  let ans = 0
  for (let i = 1; i < points.length; ++i) {
    const [curX, curY] = points[i]
    const [prevX, prevY] = points[i - 1]
    ans += Math.max(Math.abs(curX - prevX), Math.abs(curY - prevY))
  }
  return ans
}
