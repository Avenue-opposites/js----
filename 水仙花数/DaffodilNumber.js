// function DaffodilNumber(n,bit) {
//     bit = 10 ** bit;
//     const result = [];
//     for(let i = bit / 10; i < bit ;i++) {
//         const arr = i.toString().split(""); 
//         const num = Number(arr.join(""));
//         let sum = 0;
//         for (let j = 0; j < arr.length; j++) {
//             sum += arr[j] ** n;
//         };
//         if(sum === num) {
//             result.push(sum);
//         }
//     };
//     return result;
// };
function DaffodilNumber(n) {
    const result = [];
    let bits,tens,hundreds,sum = 0;
    for(let i = 100; i < 1000 ;i++) {
       bits = Math.floor(i / 100);
       tens = Math.floor((i / 10) % 10);
       hundreds = i % 10;
       sum = power(hundreds,n) + power(tens,n) + power(bits,n);
       if(i === sum) result.push(sum);
    };
    return result;
};
function power(x,y) {
    let i = 0,sum = 1;
    while (i < y) {
        sum = sum * x;
        i++;
    }
    return sum;
};