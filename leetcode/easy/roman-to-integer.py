# class Solution:
#     def romanToInt(self, s: str) -> int:
#         map, ans = {
#             'I': 1,
#             'V': 5,
#             'X': 10,
#             'L': 50,
#             'C': 100,
#             'D': 500,
#             'M': 1000
#         }, 0
#         for i in range(0, len(s)-1):
#             if map[s[i]] < map[s[i+1]]:
#                 ans -= map[s[i]]
#             else:
#                 ans += map[s[i]]
#         return ans + map[s[-1]]

# answer
class Solution:
    def romanToInt(self, s: str) -> int:
        roman_to_integer = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        s = s.replace("IV", "IIII").replace("IX", "VIIII").replace("XL", "XXXX").replace(
            "XC", "LXXXX").replace("CD", "CCCC").replace("CM", "DCCCC")
        return sum(map(lambda x: roman_to_integer[x], s))
