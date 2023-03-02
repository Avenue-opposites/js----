/**
 * @param {number[]} nums
 * @return {number}
 */

//dp(i) = max(nums[i] + dp(i - 2),dp(i - 1));分两种情况1.取当前值2.不取当前值

//递归解法
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.reduce((pre, current) => pre + current, 0) === 0) return 0;
    const cache = [];
    const dp = (i) => {
        if (i < 0 || i > nums.length - 1) return 0;
        if (cache[i]) return cache[i];
        return cache[i] = Math.max(nums[i] + dp(i - 2), dp(i - 1));
    };
    return dp(nums.length - 1);
};

//dp数组解法
var rob = function (nums) {
    if (nums.length === 0) return 0;
    const dp = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            dp[i] = nums[i];
        } else if (i === 1) {
            dp[i] = Math.max(nums[i], nums[i - 1]);
        } else {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }
    }
    return dp[nums.length - 1];
};


console.log(rob([2, 7, 9, 3, 1]));

