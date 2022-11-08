# mine
# class Solution:
#     def isValid(self, s: str) -> bool:
#         stack = []
#         for c in s:
#             if c == '(':
#                 stack.append(')')
#             elif c == '{':
#                 stack.append('}')
#             elif c == '[':
#                 stack.append(']')
#             else:
#                 if len(stack) == 0 or c != stack.pop():
#                     return False
#         return len(stack) == 0

# ans
class Solution:
    def isValid(self, s: str) -> bool:
        d, stack = {
            '(': ')',
            '{': '}',
            '[': ']'
        }, []
        for c in s:
            if c in d:
                stack.append(c)
            elif len(stack) == 0 or d[stack.pop()] != c:
                return False
        return stack == []
