// https://leetcode.com/problems/number-of-1-bits/
// Number of 1 Bits
let n = 00000000000000000000000010000000
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    var nString = (n).toString(2)
    var total = 0
	for (let i of nString) {
		if (i == '1') {
			total++
		}
	}
    return total
};
