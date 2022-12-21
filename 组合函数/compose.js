//组合函数
const compose = (fn,gn) => x => fn(gn(x));

const power = x => x * x;
const mul = x => x * 2;

console.log(compose(mul,compose(power,mul))(3));