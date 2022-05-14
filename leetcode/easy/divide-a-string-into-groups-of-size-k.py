# https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/

class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        ans, n = [], len(s)
        if n % k != 0:
            s += fill * (k-n % k)
        for i in range(0, n, k):
            ans.append(s[i:i+k])
        return ans
