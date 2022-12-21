/**
 * @param {number[][]} n
 * @return {number}
*/

function matrixOfSum(matrix) {
    if(!matrix.length || !matrix[0].length || (matrix.length !== matrix[0].length)) {
        throw new Error("行和列必须一样");
    }
    let sum = 0;
    let start = 0;
    let end = matrix.length - 1;
    while (start < matrix.length || end >= 0) {
       sum += start === end 
       ? matrix[start][end] 
       : matrix[start][start] + matrix[start][end];
       start++;
       end--;
    }
    return sum;
};

console.log(matrixOfSum([
    // [1,2,3],
    // [4,5,6],
    // [7,8,9]
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]));