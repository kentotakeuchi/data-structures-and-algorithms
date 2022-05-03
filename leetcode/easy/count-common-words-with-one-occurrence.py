# https://leetcode.com/problems/count-common-words-with-one-occurrence/
# from collections import defaultdict

class Solution:
    def countWords(self, w1: List[str], w2: List[str]) -> int:
        ''''
        dict, ans = defaultdict(lambda: 0, {}), 0
        for w in w1:
            dict[w] += 1
        for w in w2:
            if w in dict and dict[w] < 2:
                dict[w] -= 1
        for v in dict.values():
            if v == 0:
                ans += 1
        return ans
        '''

        count = Counter(w1 + w2)
        return len([word for word in count if count[word] == 2 and word in w1 and word in w2])
