/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    //清空字符串两边的空格的结果
    let str = s.trim();;
    //保存字符串长度
    let len = str.length;
    //如果为空就返回-1
    if(!str) return 0;
    //如果字符串之中不包含空格就说明只有一个单词,并返回当前的长度
    if(!str.includes(" ")) return len;
    //逆向遍历字符串
    for(let i = len - 1;i >= 0;i--) {
        //如果字符串前一位为空格就直接使用字符串长度减去当前索引得到最后一个单词的长度,并且返回
        if(str[i-1] === " ") {
            return len - i;
        }
    }
};