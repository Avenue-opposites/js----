/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//dp(m,n) = dp(m - 1,n) + dp(m,n -1);状态转移方程
//dp(0,1) = 1;
//dp(1,0) = 1;
//dp(1,1) = 2;

//递归解法
// var uniquePaths = function(m, n) {
//     const cache = {};//缓存
//     const dp = (i,j) => {
//         if(i === 0 || j === 0) return 1;
//         const key = `${i}-${j}`;
//         if(cache[key]) return cache[key];
//         //记录缓存,递归前两项
//         return (cache[key] = dp(i - 1,j) + dp(i,j - 1));
//     };
//     return dp(m - 1,n - 1);
// };


//dp数组解法
var uniquePaths = function(m, n) {
    //建立dp数组
    const dp = Array.from(new Array(m).fill(),() => []);
    //双循环从头开始计算
    for(let i = 0;i < m;i++) {
        for(let j = 0;j < n;j++) {
            //当为第一行或者第一列是为1,否则就为前两位
            if(i === 0 || j === 0) {
                dp[i][j] = 1;
            }else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    console.log(dp);
    //返回指定的次数
    return dp[m - 1][n - 1];
};



console.log(uniquePaths(3,7));