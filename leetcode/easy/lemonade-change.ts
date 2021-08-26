// https://leetcode.com/problems/lemonade-change/

// MINE
/*
function lemonadeChange(bills: number[]): boolean {
    const map = new Map()
    
    for(let bill of bills) {
        if(bill === 5) {
            map.set(bill, map.get(bill)+1 || 1)
        } else if(bill === 10) {
            map.set(bill, map.get(bill)+1 || 1)
            if(map.get(5) === 0 || !map.get(5)) return false
            map.set(5, map.get(5)-1)
        } else if(bill === 20) {
            map.set(bill, map.get(bill)+1 || 1)
            if(map.get(10) >= 1 && map.get(5) >= 1) {
                map.set(10, map.get(10)-1)
                map.set(5, map.get(5)-1)
            } else if(map.get(5) >= 3) {
               map.set(5, map.get(5)-3)
            } else {
                return false
            }
        }
        console.log({map})
    }
    
    return true
};
*/

// ANSWER
function lemonadeChange(bills: number[]): boolean {
  let five = 0,
    ten = 0
  for (let i of bills) {
    if (i == 5) five++
    else if (i == 10) {
      five--
      ten++
    } else if (ten > 0) {
      ten--
      five--
    } else five -= 3
    if (five < 0) return false
  }
  return true
}
