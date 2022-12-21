//节流就是在一定时间内事件执行频繁,要限制事件在一定时间内的执行次数
//比如滚动事件
document.onscroll = jieLui(function() {
    console.log(1);
},500);

//定义一个函数
function jieLui(callBack,time) {
    //定义变量设置状态
    let status = false;
    return function() {
        //判断为true就说明回调任务正在执行
        if(status) {
            //然后返回
            return
        }
        setTimeout(() => {
            callBack();
            //回调任务结束,把状态修改
            status = false;
        },time);
        status = true;
    }
}