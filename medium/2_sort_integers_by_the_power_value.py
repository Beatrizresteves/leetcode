# Sort Integers by The Power Value
# https://leetcode.com/problems/sort-integers-by-the-power-value/description/

class Solution:
    def getKth(lo: int, hi: int, k: int) -> int:
        d = {}

        def getPower(n):
            c = 0
            while n != 1:
                if n % 2 == 0:
                    n = n//2
                    c += 1
                else:
                    n = n*3 + 1
                    c += 1
            return c

        for i in range(lo, hi+1):
            a = getPower(i)
            d[i] = a

        di = sorted(d.items(), key=lambda x: x[1])

        ans = list(di)
        return ans[k-1][0]
    print(getKth(12, 15, 2))
