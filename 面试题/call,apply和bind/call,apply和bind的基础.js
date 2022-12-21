const friend = {
    name:"friend",
    smartPhone:{
        brand:"iPhone",
        version:"13 Pro max",
        price:9999,
        battery:80,
        calling(whom,number) {
            console.log(`正在拨打${number},${whom}的电话...`);
        }
    },
    charge(level = this.smartPhone.battery) {
        if(this.smartPhone.battery >= 100) {
            console.log(`${this.name}的手机充满了.`);
            return this.smartPhone.battery;
        }else {
            if(this.smartPhone.battery > level) {
                console.log('不能越充越少哦.');
                return this.smartPhone.battery;
            }
            this.smartPhone.battery = level;
            console.log(`${this.name}的手机电量充到了${this.smartPhone.battery}%`);
            return this.smartPhone.battery;
        }
    }
};
const pzj = {
    name:"pzj",
    smartPhone:{
        brand:"魅族",
        version:"16 th plus",
        price:1999,
        battery:5,
        calling(whom,number) {
            console.log(`正在拨打${number},${whom}的电话...`);
        }
    },
};
//使用call() 会自动调用函数 参数:1.调用者的this指向 2.调用者的接收的参数,依次排列对应 
//返回值是参数2
//此时pzj手机没电了,需要接朋友的充电宝充电 
let result1 = friend.charge.call(pzj,50);//pzj的手机电量充到了80%
//console.log(result1);
//使用apply() 会自动调用函数 参数:1.调用者的this指向 2.调用者的接收的参数数组,依次排列对应
//返回值是参数2
let result2 = friend.charge.apply(pzj,[80]);
// console.log(result2);
//这时是向朋友买一个属于自己的充电宝
//使用bind() 不会自动调用函数 参数:1.调用者的this指向 2.调用者的接收的参数,依次排列对应 
//返回值是函数,和调用者一样的函数
let result3 = friend.charge.bind(pzj);
result3(100);