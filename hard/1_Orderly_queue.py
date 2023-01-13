# https://leetcode.com/problems/orderly-queue/
# Orderly Queue

class Solution:
    def orderlyQueue(s: str, k: int) -> str:
        if k == 1:
            s_2 = s+s
            n = len(s)
            return min(s_2[i:i+n] for i in range(n))
        else:
            return "".join(sorted(s))
    print(orderlyQueue("cba", 1))
