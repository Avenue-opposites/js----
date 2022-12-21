
// I             1
// V             5
// X             10 
// L             50             
// C             100
// D             500
// M             1000
/**
 * @param {string} s
 * @return {number}
 */
/* 提示:利用两个数字之大小关系 */

//  var romanToInt = function(s) {
//     //保存字符串长度
//     let len = s.length;
//     //创建总数
//     let sum = 0;
//     //创建标识
//     let sign;
//     //字符串转为大写
//     s = s.toLocaleUpperCase();
//     //定义函数转成map
//     function setMap(keyArr,valueArr) {
//         let m = new Map();
//         for(let i = 0;i < keyArr.length;i++) {
//             m.set(keyArr[i],valueArr[i]);
//         }
//         return m;
//     };
//     //保存字符对应的罗马数字的值
//     const M = setMap(["I","V","X","L","C","D","M"],[1,5,10,50,100,500,1000]);
//     //遍历字符串数组,但是不取最后一位
//     for (let i = 0;i < len - 1;i++) {
//         //比较两个对应的罗马数字的大小
//         if(M.get(s[i]) >= M.get(s[i+1])) {
//             //当前的字符数字大于等于下一位就为1
//             sign = 1;
//         }else {
//             //否则就为-1
//             sign = -1;
//         }
//          //为1是就是普通累加,为-1时就变为减去
//         sum += M.get(s[i]) * sign; 
//     }
//     sum += M.get(s[len - 1]);
//     return sum;
// };


var romanToInt = function(s) {
    //保存字符串长度
    let len = s.length;
    //创建总数
    let sum = 0;
    //字符串转为大写
    s = s.toLocaleUpperCase();
    //定义函数转成map
    function setMap(keyArr,valueArr) {
        let m = new Map();
        for(let i = 0;i < keyArr.length;i++) {
            m.set(keyArr[i],valueArr[i]);
        }
        return m;
    };
    //保存字符对应的罗马数字的值
    const M = setMap(["I","V","X","L","C","D","M"],[1,5,10,50,100,500,1000]);
    //遍历字符串数组,但是不取最后一位
    for (let i = 0;i < len - 1;i++) {
        //比较两个对应的罗马数字的大小
        if(M.get(s[i]) >= M.get(s[i+1])) {
            //当前的字符数字大于等于下一位就直接累加
            sum += M.get(s[i]);

        }else {
            //否则就加上当前的值的负数,相当于减去当前值
            sum += -M.get(s[i]);
        }
    }
    //由于只有一个元素时,i为0,i+1也为0,所以不会进入循环,就要加上最后一个值
    //在有两个元素时,第一个数字大于等于第二个时,由于加的是当前值,使用要把后一个数字数值也就是最后一个数字数值加上
    //在有两个元素时,第一个数字小于第二个时,就会把当前值变为负数相加,然后使用要把最后一个数字数值减去前一个数字数值
    sum += M.get(s[len - 1]);
    return sum;
};
// romanToInt("mcmxciv"); 





