class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans, mn = '', len(min(strs, key=len))
        print(mn)
        for i in range(0, mn):
            c = strs[0][i]
            for s in strs:
                if s[i] != c:
                    return ans
            ans += c
        return ans
