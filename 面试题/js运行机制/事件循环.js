//JS使用事件循环机制
//事件循环应用于任务队列,当callStack(调用栈)任务执行完后,会查看任务队列并其中执行任务
//然后一直轮询任务队列

//事件循环
console.log("start");
setTimeout(() => {
    console.log("我后被添加到任务队列,我被执行时,任务队列就只有我一个任务2");
},3000);
setTimeout(() => {
    console.log("我后被添加到任务队列,我被执行时,任务队列就只有我一个任务1");
},1000);
setTimeout(() => {
    console.log("和我一起添加的任务,是同步执行的1");
},100);
setTimeout(() => {
    console.log("和我一起添加的任务,是同步执行的2");
},100);
console.log("end");