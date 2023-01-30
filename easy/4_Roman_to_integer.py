# https://leetcode.com/problems/roman-to-integer/
# Roman to Integer

class Solution:
    def romanToInt(s: str) -> int:

        num_roman = {"I": 1, "V": 5, "X": 10,
                     "L": 50, "C": 100, "D": 500, "M": 1000}
        res = 0
        for i in range(len(s)):
            if i + 1 < len(s) and num_roman[s[i]] < num_roman[s[i + 1]]:
                res -= num_roman[s[i]]
            else:
                res += num_roman[s[i]]
        return res

    print(romanToInt("III"))
