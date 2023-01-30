# https://leetcode.com/problems/sqrtx/
# Sqrt(x)

import math


class Solution:
    def mySqrt(x: int) -> int:
        raiz = math.sqrt(x)
        resultado = math.floor(raiz)
        return resultado
    print(mySqrt(4))
