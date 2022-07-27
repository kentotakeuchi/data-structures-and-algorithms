// https://leetcode.com/problems/decode-the-message/

// MINE
function decodeMessage(key: string, message: string): string {
  const map = new Map()
  let code = 97,
    ans = ''
  for (let c of key) if (c !== ' ' && !map.has(c)) map.set(c, String.fromCharCode(code++))
  for (let c of message) ans += map.get(c) || ' '
  return ans
}
