//防抖是指在一段时间频繁触发的事件,只有最后一次有效
const input = document.getElementById('input');
input.oninput = fangDou(function() {
    console.log(input.value);
},500);

//定义一个函数,接收两个参数
//一个是需要调用的函数,一个是防抖时间间隔
function fangDou(callBack,time) {
    //定义一个变量接收延时器
    let t = null;
    //返回一个函数
    return function() {
        //判断如果存在延时器就把上一个延时器清除
        if(t) {
            // clearInterval(t);
            clearTimeout(t);
        }
        //然后创建一个延时器,并且调用回调函数参数
         t = setTimeout(callBack,time);
    }
};

