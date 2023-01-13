// Maximum Gap
// https://leetcode.com/problems/maximum-gap/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
	if (nums.length < 2) return 0;
	 nums.sort((a, b) => b - a);
	 let maxDiff = 0,
	 diff = 0;
	 for (let i = 0; i < nums.length - 1; i++) {
		 diff = Math.abs(nums[i + 1] - nums[i]);
		 if (maxDiff < diff) maxDiff = diff;
	 }
	 return maxDiff;
 };
 console.log(maximumGap([3,6,9,1]))