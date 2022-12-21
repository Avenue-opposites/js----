/**
 * @param {number[]} nums
 * @return {number}
 */

//思路一:对比 左值 === 右值
//  var pivotIndex = function(nums) {
//     //定义中心索引和左值
//      let index = 0,left = 0;
//      //遍历数组
//      while (index < nums.length) {
//         //如果中心索引不在首位,添加左值
//         if(0 < index) {
//             //添加中心索引前一位的值
//             left += nums[index-1];
//         }
//         //定义右值
//         let right = 0;
//         //获取中心索引右边所有数组的和
//         for (let j = index+1; j < nums.length; j++) {
//             right += nums[j];
//         }
//         //进行对比,如果相同就说明当前的index是中心索引
//         if(left === right) {
//            return index;
//         };
//         //中心索引向右移动
//         index++;
//      };
//      //以后没有找的相同值说明没有中心索引
//      return -1;
// };


//思路二:左值 * 2 + 中心索引的值 = 数组的总和
var pivotIndex = function (nums) {
    //定义索引,左值,总数
    let index = 0, left = 0, sum = 0;
    //计算总数
    // sum = nums.reduce((prev, current) => prev + current, sum);
    for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
    }
    while (index < nums.length) {
        //如果索引为第一位,就添加左值
        if (0 < index) {
            //添加前一位
            left += nums[index - 1];
        };
        //如果左值*2+当前索引值等于总数,就说明当前索引是中心索引,并返回
        if (left * 2 + nums[index] === sum) {
            return index;
        }
        index++;
    }
    return -1;
};




console.log(pivotIndex([1,2,3]));;