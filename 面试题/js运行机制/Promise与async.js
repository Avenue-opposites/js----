//Promise(承诺)对象,是一种处理异步代码（而不会陷入回调地狱）的方式。
//被创建的 promise 最终会以被解决状态或被拒绝状态结束,并在完成时调用相应的回调函数（传给 then 和 catch）。
//当发生错误是优先执行近的catch()
//Promise可以实现链式调用

//async函数和await表达式
//async是基于Promise对象之上,相当于Promise的语法糖
//async函数是异步函数,在一个函数之前加上它,返回值就会是一个Promise对象
//在await表达式之后接收一个Promise对象,它的返回值是这个Promise对象的解决状态的值,如果失败的话,可以使用catch语句捕捉
//而且await表达式以下的语句,会在它之后的Promise对象成功之后,当做then()中的语句执行

//async函数
// let something = async value => {
//     return value;//返回Promise对象
// };
// let result = something("OK");
// console.log(result);//Promise {<fulfilled>: 'OK'}
// result.then(value => {
//     console.log(value);
// });

//await表达式,只能出现在async函数中
//1.接收一个Promise对象
// const p = new Promise((resolve,reject) => {
//     setInterval(() => {
//         resolve("我是成功的值,并且会被await表达式接收");
//     },3000);
//     reject(Error("出现错误,程序暂停!"));
// });
// async function test(value) {
//     try {
//         console.log(value);
//         let result = await p;
//         //await表达式以后的代码会等promise对象成功之后执行
//         //如果失败就不会执行
//         console.log(result);
//     }catch(error) {
//         //可以使用catch捕捉处理错误
//         console.error(error);
//     }
// };
// test("start");


//2.可以接收async函数(因为异步函数返回值是Promise对象)
async function add(x,y) {
        return x + y;
};
async function mul(x,y) {
        return x * y;
};
async function test(value,arr) {
    console.log(value);
    //获取到add成功的返回值
    let result1 = await add(...arr);
    console.log(result1);
    //获取到mul成功的返回值
    let result2 = await mul(...arr);
    console.log(result2);
};
test("start",[2,6]);


