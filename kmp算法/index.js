/**
 * @author pzj <2949195453@qq.com>
 * @param {string} str
 * @param {string} searchStr
 * @return {number} firstIndex
*/

//操作每在主串中子串单独位置
function kpm(str,searchStr) {
    let i = 0,j = 0;
    let next = buildNext(searchStr);
    while (i < str.length) {
        //字符相同,两个指针后移
        if(str[i] === searchStr[j]) {
            j++;
            i++;
        //字符不同并且子串指针不是首位就根据next数组移动
        }else if(j > 0) {
            j = next[j - 1];
        //字符不同并且是首位主串正常后移
        }else{
            i++;
        }
        //当子串指针等于子串的长度时查找成功
        if(j === searchStr.length) {
            return i - j;
        }
    }
    return -1;
}

//生成next数组
function buildNext(str) {
    let next = [0];
    //从第二个元素开始
    let i = 1;
    while (i < str.length) {
        //获取每个子串
        let subStr = str.substring(0,i+1);
        //双指针获取前缀和后缀
        let left = 0,right = i;
        //保存相同最长前后缀的长度
        let res = 0;
        while (left < subStr.length - 1 && right > 0) {
            const sub = subStr.substring(0,left+1);
            if(sub === subStr.substring(right,i+1)) {
                res = sub.length;
            }
            left++;
            right--;
        }
        next[i] = res; 
        i++;
    }
    return next;
}

console.log(kpm("abababcaa","ababc"));
