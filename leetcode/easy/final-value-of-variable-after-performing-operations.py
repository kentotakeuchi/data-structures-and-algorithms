# https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        '''
        ans = 0
        for op in operations:
            if op[1] == '+':
                ans += 1
            else:
                ans -= 1
        return ans
        '''

        op_dict = {"--X": -1, "X--": -1,
                   "++X": 1, "X++": 1}
        return sum(op_dict[op] for op in operations)
