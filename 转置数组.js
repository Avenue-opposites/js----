function transpose(arr) {
  for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            t = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = t;
        }
    }  
};
const arr = [
    [1,2, 3, 4],
    [5,6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
];
// console.log(arr);
transpose(arr);
console.log(arr);