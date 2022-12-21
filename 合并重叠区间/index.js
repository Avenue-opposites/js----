/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
    const resultArr = [];
    //创建变量保存索引和最大值
    let i = 0,max;
    if (intervals.length === 1 || intervals.length === 0) return intervals;
    //深度克隆数组
    intervals = ArrayDeepCopy(intervals);
    //左端点升序排序
    intervals.sort((next, pre) => next[0] - pre[0]);
    while (i < intervals.length) {
        let j = i + 1;
        //最大值为当前区间的右端点
        max = intervals[i][1];
        //判断当下一个区间是否存在,并且该区间的左端点小于等于最大值,并且该区间在总区间内
        while (intervals[j] && max >= intervals[j][0] && j < intervals.length) {
            //获取当前区间的右端点和下一个区间的右端点中的最大值
            max = max > intervals[j][1] ? max : intervals[j][1];
            j++;
        };
        //添加当前左端点和最大值为一个区间
        resultArr.push([intervals[i][0],max]);
        //更新当前的索引为上次寻找最大值索引最后的位置的后一位
        i = j;
    };
    return resultArr;
};
function ArrayDeepCopy(arr) {
    let i = 0;
    const result = [];
    while (i < arr.length) {
        const element = arr[i];
        element instanceof Array || element instanceof Object
        ? result[i] = ArrayDeepCopy(element)
        : result[i] = element;
        i++;
    };
    return result;
};
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));//[[1,6],[8,10],[15,18]]
// console.log(merge([[1,4],[4,5]]));//[[1,5]]
// console.log(merge([[1,4],[0,4]]));//[[0,4]]
// console.log(merge([[1,3],[3,4],[4,6]]));//[[1,6],[10,18]]
// console.log(merge([[1,4],[5,6]]));
