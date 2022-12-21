/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    //创建变量保存当前字符串的值
    let str = s;
    //如果字符串为空就直接返回false;
    if(!s.trim()) return false;
    //如果字符串是长度奇数就直接返回false,因为括号是成对出现的,必须是偶数
    if(s.length%2) return false;
    //因为括号必须是成对出现,所以循环长度除2,每次循环替换一次
    for(let i = 0;i < s.length/2;i++) {
        //替换字符串中的"()","[]","{}",并且保存上一次替换之后的结果,接着替换
        str = str.replace(/\(\)|\[\]|\{\}/g,"");
    };
    //如果替换结果为空串就说明全都符合规则,然后进行布尔值取反,反之则不符合规则
    return !str;
};

