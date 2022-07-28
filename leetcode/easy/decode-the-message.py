# https://leetcode.com/problems/decode-the-message/

class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        mp, i = {' ': ' '}, 97
        for c in key:
            if c != ' ' and c not in mp:
                mp[c] = chr(i)
                i += 1
        return ''.join(mp[c] for c in message)
