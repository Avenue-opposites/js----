function newisNaN(parame) {
    //转换为Number
    let nan = Number(parame);
    //为零的也是数字
    if(nan === 0) {
        return false;
    }
    //使用布尔对象,数字为true,NaN为false,然后进行非运算
    return !Boolean(Number(parame));
};

// console.log(newisNaN("a"));//true
// console.log(newisNaN("123a"));//true
// console.log(newisNaN("0b11"));//false 0b11 ==> 3
// console.log(newisNaN(123));//false
// console.log(newisNaN(true),Number(true));//false
// console.log(newisNaN("false"));//true
// console.log(newisNaN({}));//true
// console.log(newisNaN(undefined));//true
// console.log(newisNaN(NaN));//true
// console.log(newisNaN(null),Number(null));//false null ==> 0
// console.log(newisNaN([]),Number([]));//false [] ==> 0
// console.log(newisNaN([12345]),Number([12345]));//false [] ==> 123
// console.log(newisNaN([123,456]),Number([123,456]));//true [123,456] ==> NaN

Number.newisNaN = function(parame) {
    //判断是否是undefined或null,是的话就直接返回false
    if(parame === undefined || parame === null) {
        return false;
    }
    //然后使用布尔对象,将有值的都转换成true,NaN会转换为false,然后非运算即可
    return !Boolean(parame);
};

console.log(Number.newisNaN("a"));//false
console.log(Number.newisNaN("123a"));//false
console.log(Number.newisNaN("0b11"));//false 
console.log(Number.newisNaN(123));//false
console.log(Number.newisNaN(true));//false
console.log(Number.newisNaN("false"));//false
console.log(Number.newisNaN({}));//false
console.log(Number.newisNaN(undefined));//false
console.log(Number.newisNaN(NaN));//true
console.log(Number.newisNaN(null));//false
console.log(Number.newisNaN([]));//false 
console.log(Number.newisNaN([12345]));//false 
console.log(Number.newisNaN([123,456]));//false



