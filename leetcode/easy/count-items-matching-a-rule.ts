// https://leetcode.com/problems/count-items-matching-a-rule/

// MINE
/*
function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let ans = 0
    
    for(let item of items) {
        const [type, color, name] = item
        if(ruleKey === 'type' && ruleValue === type || ruleKey === 'color' && ruleValue === color || ruleKey === 'name' && ruleValue === name) ++ans
    }
    
    return ans
};
*/

// ANSWER
const RULE_IDX = {
  type: 0,
  color: 1,
  name: 2
}

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  return items.reduce((ans, item) => (item[RULE_IDX[ruleKey]] === ruleValue ? ans + 1 : ans), 0)
}
