/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// "aabbcc","c" [4]
// "abccc","cc" [2]
// "abcacc","cc" [4]
// "cccc","cc" [0]

//找出第二个字符串在第一个字符串首次出现的位置,返回索引
 var strStr = function(haystack, needle) {
    //创建变量保存结果
    let result;
    //创建变量保存控制needle索引,默认为第一个字符
    let j = 0;
    //如果needle为空,就返回0
    if(!needle) return 0;
    //如果haystack为空就返回-1
    if(!haystack) return -1;
    //如果两个参数相等就返回0
    if(haystack === needle) return 0;
    //如果第二个字符串的长度比第一个字符串长就返回-1
    if(needle.length > haystack.length) return -1;
    //如果第一个字符串中不包含第二个字符串就返回-1
    if(!haystack.includes(needle)) return -1;
    //遍历第一个字符串
    for(let i in haystack) {
        //判断第一个字符串的每个字符是否等于第二个字符串的第一个字符,如果是,就比较第二个字符串的下一个字符
        if(haystack[i] === needle[j]) {
            //如果第二个字符串的长度如果为1,就直接给把当前第一个字符串的索引作为结果,然后退出循环
            if(needle.length === 1) {
                result = i;
                break;
            //如果第二个字符串的下一位字符为空,就说明找到了第二个字符串的在第一个字符串中出现的位置
            }else if(!needle[j+1]) {
                //当前第一个字符串索引减去第二个字符串索引,就等于第二次字符串在第一个字符串中首次出现的位置索引,然后退出循环
                result = i - j;
                break;
            }
            //更新第二个字符串索引
            j++;
        }else {
        //如果遇到有一部分字符相等,但是不是完全一致就清空第二个字符串的索引,接着比较
            if(j) j = 0;
        };
    };
    return Number(result);
};