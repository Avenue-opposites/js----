//JS中Promise.then方法和await之后的代码是微任务
//JS中计时器,文件读取和ajax是宏任务

//微任务(会在同步之后执行)
// console.log(1);
// new Promise((resolve,reject) => {
//     //Promise里的代码是同步的
//     console.log(2);
//     resolve(3);
// }).then(value => {
//     console.log(value);
// });
// console.log(4);

//宏任务
console.log(1);
setTimeout(() => {
    console.log(2);
});
let p = new Promise((resolve,reject) => {
          //Promise里的代码是同步的
          console.log(3);
          resolve(4);
      }).then(value => {
         console.log(value);
      });
console.log(5);
