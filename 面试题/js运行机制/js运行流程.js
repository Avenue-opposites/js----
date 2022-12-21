//js运行流程
//1.同步
//process.netxTick
//微任务(Primise.then,Object.observe,)
//宏任务(setimeout,script,I/O)
//setimmediate

// start,Promise1,end,async,process.nextTick1,process.nextTick2,Promise2,async1,async2,
//setInterval2,setInterval3,setImmediate1,setImmediate2,setInterval1
process.nextTick(() => {
    console.log('process.nextTick1');
});
console.log('start');
setImmediate(() => {
    console.log('setImmediate1');
});
setTimeout(() => {
    console.log("setInterval1");
},1000);
setTimeout(() => {
    console.log("setInterval2");
},2);
new Promise((res,rej) => {
    console.log('Promise1');
    res('Promise2');
}).then(val => {
    console.log(val);
});
async function something() {
    let str = 'async';
    console.log(str);
    return str;
}
async function test() {
    let result = await something();
    console.log(`${result}1`);
    return result;
}
process.nextTick(() => {
    console.log('process.nextTick2');
});
console.log('end');
setTimeout(() => {
    console.log("setInterval3");
},0);
setImmediate(() => {
    console.log('setImmediate2');
});
test().then(val => {
    console.log(`${val}2`);
});

