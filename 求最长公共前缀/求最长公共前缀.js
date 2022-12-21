/**
 * @param {string[]} strs
 * @return {string}
 */
/* 前缀的特点:必须从字符串开头开始,之后的值不能断 */
var longestCommonPrefix = function(strs) {
    //保存数组第一个字符串,作为默认前缀
    let prefix = strs[0];
   if(!strs.length) return "";
   //封装一个函数用于获取两个字符串中的公共前缀
   function puilbPrefix(pre,next) {
    //声明一个变量,以后用于保存结果
    let str = "";
    //声明一个变量保存两个字符串中长度的最小值
    let minLen = Math.min(pre.length,next.length);
    //如果最小值为0,则说明有一个空串,所以没有公共前缀,返回""
    if(!minLen) {
        return "";
    }
    //如果两个值全等,就直接返回该字符串
    if(pre === next) {
        return pre;
    }
    //由于公共前缀的长度不可能大于两个字符串中最短字符串的长度,所以只需要遍历最小长度以内的字符
    for(let i = 0;i <= minLen ;i++) {
        //对比两个字符串在最小长度中的字符是否相同,相同就进行拼串,不同就直接退出循环,然后返回结果
        if(pre[i] === next[i]) {
            str += next[i];
        }else {
            break;
        }
    }
    return str;
    };
    //遍历字符串数组,并且索引从1开始,因为保存了第一个元素,并且第二个参数是从第一个元素到最后的元素
    for(let i = 1; i < strs.length;i++) {
        //获取前缀,并且将上一次的公共前缀与字符串数组的下一个元素传入,直到最后一个元素
        prefix = puilbPrefix(prefix,strs[i]);
    }
    //返回最长公共前缀
    return prefix;
};

