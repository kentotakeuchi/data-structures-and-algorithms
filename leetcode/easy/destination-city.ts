// https://leetcode.com/problems/destination-city/

// MINE: map
/*
function destCity(paths: string[][]): string {
    const map: Map<string, boolean[]> = new Map()
    
    for(let [start, end] of paths) {
        map.has(start) ? map.set(start, [true, true]) : map.set(start, [true, false])
        map.has(end) ? map.set(end, [true, true]) : map.set(end, [false, true])
    }
    
    for(let [key, val] of map) {
        if(!val[0] && val[1]) return key
    }
    
    return 'not found'
};
*/

// ANSWER: map
/*
function destCity(paths: string[][]): string {
  const map = new Map();
  for (const [start, end] of paths) {
    map.set(start, map.has(start) ? 0 : 1);
    map.set(end, map.has(end) ? 0 : -1);
  }
  for (const [city, val] of map) {
    if (val === -1) return city;
  }
};
*/

// ANSWER: set
function destCity(paths: string[][]): string {
  const set = new Set()
  for (const [start, end] of paths) set.add(start)
  for (const [start, end] of paths) {
    if (!set.has(end)) return end
  }
  return 'not found'
}
