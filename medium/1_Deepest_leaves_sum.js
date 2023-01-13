// Deepest Leaves Sum
// https://leetcode.com/problems/deepest-leaves-sum/ 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    let sum = 0;
    if (!root) return 0;
    const q = [root];
    while (q.length) {
        let len = q.length;
        sum = 0;
        while (len--) {
            const n = q.shift();
            sum += n.val;
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
    }
   return sum;
};
console.log(deepestLeavesSum([1,2,3,4,5,null,6,7,null,null,null,null,8]))