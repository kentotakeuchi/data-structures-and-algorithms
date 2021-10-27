// https://leetcode.com/problems/distance-between-bus-stops/

// MINE..
/*
function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    let clock = 0
    let counter = 0
    
    
    for(let i=start; i<destination; ++i) {
        clock += distance[i]
    }

    for(let i=distance.length-1; i>=destination; --i) {
        counter += distance[i]
    }
    
    return Math.min(clock, counter)
};
*/

// ANSWER
function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  if (start > destination) [start, destination] = [destination, start]
  let res = 0,
    total = 0
  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      res += distance[i]
    }
    total += distance[i]
  }
  return Math.min(res, total - res)
}

// ANSWER: built-in
/*
function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
if (start > destination) [start, destination] = [destination, start];
const total = distance.reduce((acc, cur) => acc + cur);
const route = distance.slice(start, destination).reduce((acc, cur) => acc + cur);
return Math.min(route, total - route);
};
*/
