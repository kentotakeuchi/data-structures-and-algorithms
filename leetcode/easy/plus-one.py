class Solution:
    def plusOne(self, d: List[int]) -> List[int]:
        for i in range(len(d)-1, -1, -1):
            d[i] += 1
            if d[i] > 9:
                d[i] = 0
            else:
                return d
        # d.insert(0, 1)
        d = [1] + d
        return d
