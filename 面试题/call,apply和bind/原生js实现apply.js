//ES5实现
// function hello(who,game) {
//     console.log(`hello ${who},I'm ${this.name},我喜欢玩${game}`);
// };
// var obj = {
//     name:"阿修罗",
//     p() {
//         console.log(this.name);
//     }
// };
// Function.prototype.newApply = function(obj,arr) {
//     obj = obj || window;
//     var newArr = [];
//     var rom = Math.random();
//     obj[rom] = this;
//     for(var i = 0 ;i < arr.length ;i++) {
//         newArr.push("arr["+i+"]");
//     }
//     var result = eval("obj[rom]("+newArr+")");
//     delete obj[rom];
//     return result;
// };
// var result1 = hello.newApply(obj,['帝释天','阴阳师']);
// console.log(obj);
// console.log(result1);

//ES6实现
function hello(who,game) {
    console.log(`hello ${who},I'm ${this.name},我喜欢玩${game}`);
};
const obj = {
    name:"阿修罗",
    p() {
        console.log(this.name);
    }
};
Function.prototype.newApply = function(obj = window,arr) {
    let s = Symbol(Math.random());
    obj[s] = this;
    let result = obj[s](...arr);
    delete obj[s];
    return result;//返回这次对象调用函数的返回值
};
const result1 = hello.newApply(null,['帝释天','阴阳师']);
console.log(obj);
console.log(result1);
