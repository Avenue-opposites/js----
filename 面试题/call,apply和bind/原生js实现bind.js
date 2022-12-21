//ES5实现
function hello(who,game) {
    console.log(`hello ${who},I'm ${this.name},我喜欢玩${game}`);
};
var obj = {
    name:"阿修罗",
    p() {
        console.log(this.name);
    }
};
Function.prototype.newBind = function(obj) {
    obj = obj || window;
    //把数据切割为数组,去第一个参数 
    var arr1 = Array.prototype.slice.call(arguments,1);
    //变成this指针
    var that = this;
    //返回一个函数
    return function() {
        //转换数组
        var arr2 = Array.prototype.slice.call(arguments);
        //合并两个函数的参数
        var all = arr1.concat(arr2);
        //使用闭包获得that,使用apply方法绑定对象,然后把参数数组传递给that
        var result = that.apply(obj,all);
        //返回that的返回值
        return result;
    }
};
var result1 = hello.newBind(null,'帝释天');
console.log(obj);
console.log(result1('阴阳师'));

//ES6实现
// function hello(who,game) {
//     console.log(`hello ${who},I'm ${this.name},我喜欢玩${game}`);
// };
// const obj = {
//     name:"阿修罗",
//     p() {
//         console.log(this.name);
//     }
// };
// Function.prototype.newBind = function(obj = window,...rest1) {
//     let that = this;
//     //使用rest参数获取剩余参数
//    return function(...rest2) {
//        //然后再通过...运算符合并数组
//         let result = that.apply(obj,[...rest1,...rest2]);
//         return result;
//    }
// };
// const result1 = hello.newBind(obj,'帝释天');
// console.log(obj);
// console.log(result1('阴阳师'));
