/**
 * @param {number[][]} dungeon
 * @return {number}
 */

//dp(i,j) = max((min(dp(i+1,j),dp(i,j+1)) - dungeon[i][j]),1);

var calculateMinimumHP = function (dungeon) {
    const r = dungeon.length, c = dungeon[0].length;
    //建立dp数组
    const dp = Array.from(new Array(r + 1), () => new Array(c + 1).fill(Infinity));
    //最少血量为1
    dp[r - 1][c] = 1;
    dp[r][c - 1] = 1;
    //建立dp表,记录对应坐标到终点的最少通过血量
    for (let i = r - 1; i >= 0; i--) {
        for (let j = c - 1; j >= 0; j--) {
            //获取前两个之间通过需要血量最少的减去当前格子的就是当前的最少通过血量
            dp[i][j] = Math.max(Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j], 1);
        }
    }
    console.log(dp);
    return dp[0][0];
};



console.log(calculateMinimumHP(
    [
        [-1, -2, 3],//4,3,1
        [-1, 0, 0], //4,3,3
        [-3, -3, -2]//9,6,3
    ]
));

