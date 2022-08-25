# https://leetcode.com/problems/merge-similar-items/

class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        cnt = Counter()
        for k, v in items1 + items2:
            cnt[k] += v
        return sorted(cnt.items())
