//深拷贝就是把对象完完全全的克隆,包括引用数据类型
const obj = {
    name:'阿修罗',
    age:20,
    skill:{
        a:'普通攻击'
    }
} 
function deepCopy(obj) {
    let newObj = {};
    for(let v in obj) {
        //与浅拷贝不同的是首先判断属性是否是引用类型,如果是就递归调用拷贝对象,如果不是就直接拷贝
        if(obj[v] instanceof Object) {
            newObj[v] = deepCopy(obj[v]);
        }else {
            newObj[v] = obj[v];
        }
    }
    return  newObj;
};
//使用JSON方法JS会自动创建新的对象保存
function deepCopyJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let result = deepCopy(obj);
let resultJSON = deepCopyJSON(obj);
result.skill.a = '大招';
resultJSON.skill.a = '被动';
console.log(obj);
console.log(result);
console.log(resultJSON);