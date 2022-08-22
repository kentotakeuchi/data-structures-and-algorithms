# https://leetcode.com/problems/best-poker-hand/

class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        if len(set(suits)) == 1:
            return "Flush"
        match max(Counter(ranks).values()):
            case 3 | 4 | 5:
                return "Three of a Kind"
            case 2:
                return "Pair"
            case _:
                return "High Card"
