//浅拷贝只能对基本数据类型有用,对引用数据类型没有用
const obj = {
    name:'阿修罗',
    age:20,
    skill:{
        a:'普通攻击'
    }
};

function copy(obj) {
    //创建一个新对象
    let newObj = {};
    for(let v in obj) {
        //新对象的属性名和属性值和传入对象一样
        newObj[v] = obj[v]; 
    }
    //返回克隆的对象
    return newObj;
};

let result = copy(arr);
result.name = '帝释天';
result.skill.a = '大招';//对于引用类型,还是使用的同一个内存地址 
console.log(obj);
console.log(result);