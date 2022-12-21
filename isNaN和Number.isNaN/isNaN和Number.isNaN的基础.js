//isNaN() 会做隐式的Number类型转换 然后再进行判断
//返回值:转换后是NaN,返回true,转换后是number就返回false
// console.log(isNaN("a"));//true
// console.log(isNaN("123a"));//true
// console.log(isNaN("0b11"));//false 0b11 ==> 3
// console.log(isNaN(123));//false
// console.log(isNaN(true),Number(true));//false
// console.log(isNaN("false"));//true
// console.log(isNaN({}));//true
// console.log(isNaN(undefined));//true
// console.log(isNaN(NaN));//true
// console.log(isNaN(null),Number(null));//false null ==> 0
// console.log(isNaN([]),Number([]));//false [] ==> 0
// console.log(isNaN([12345]),Number([12345]));//false [] ==> 123
// console.log(isNaN([123,456]),Number([123,456]));//true [123,456] ==> NaN



//Number.isNaN() 不会做隐式的转换,而是直接判断===NaN
console.log(Number.isNaN("a"));//false
console.log(Number.isNaN("123a"));//false
console.log(Number.isNaN("0b11"));//false 
console.log(Number.isNaN(123));//false
console.log(Number.isNaN(true));//false
console.log(Number.isNaN("false"));//false
console.log(Number.isNaN({}));//false
console.log(Number.isNaN(undefined));//false
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN(null));//false
console.log(Number.isNaN([]));//false 
console.log(Number.isNaN([12345]));//false 
console.log(Number.isNaN([123,456]));//false





