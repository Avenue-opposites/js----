// class GenShin {
//     constructor(name) {
//         this.name = name;
//     };
//     hello() {
//         alert(`大家好,我叫${this.name}.`);
//     };
// };


// const 妮露 = new GenShin("妮露");
// const 钟离 = new GenShin("钟离");

const isPrime = n => {
    let i = 2;
    //判断是否为1,1不是素数
    if(n === 1 || n === 0) {
        console.log(`${n}不是一个素数`);
        return false;
    }
    //获取2到n的平方根之间的数,因为能被这个之间的数整除说明这个数不是素数
    while (i <= Math.sqrt(n)) {
        //判断是否能被整除
        if(n%i === 0) {
            console.log(`${n}不是一个素数`);
            return false;
        };
        //自增
        i++;
    };
    //上述没有被触发,说明这是个素数
    console.log(`${n}是一个素数`);
    return true;
};



