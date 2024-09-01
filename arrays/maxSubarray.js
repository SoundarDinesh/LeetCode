/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let maxSum = nums[0];
    let nextSum = nums[0];

    for(let i =1; i < nums.length; i++) {
        nextSum = Math.max(nums[i] + nextSum, nums[i]);
        maxSum = Math.max(maxSum, nextSum);
    }

    return maxSum;
};

console.log(maxSubArray([5,4,-1,7,8]));