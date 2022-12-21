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
Function.prototype.newCall = function(obj) {
    obj = obj || window;
    var newArg = [];
    //使用随机数,防止污染对象环境
    var rom = Math.random();
    obj[rom] = this;
    //使用循环把需要的参数提取到新的数组里
    //把参数变成字符串,那样他就不会获取到值了
    for(var i = 1; i < arguments.length;i++) {
        newArg.push("arguments["+i+"]");
    }
    // console.log(newArg);
    //然后把字符串当做代码运行
    var result = eval("obj["+rom+"]("+newArg+")");
    delete obj[rom];
    return result;
};
var result1 = hello.newCall(obj,'帝释天','阴阳师');
console.log(obj);
console.log(result1);


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
// Function.prototype.newCall = function(obj = window,...rest) {
//     //对象如果没有就使用window
//     //使用Symbol类型,就不会和对象参数重名
//     let s = Symbol.for(Math.random());
//     //对象的方法指向调用的函数 相当于对象也有这个方法,使用方法中的this指向就是该对象
//     obj[s]= this;
//     //调用方法,使用扩展运算符把参数分开,并且把参数传入
//     let result = obj[s](...rest);
//     //最后删除对象的该方法,以免污染对象的环境
//     delete obj[s];
//     return result;
// };
// let result2 = hello.newCall(null,'帝释天','阴阳师');
// console.log(obj);
// console.log(result2);
