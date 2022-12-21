/**
 * @param {number[][]}
 * @return {number[][]}
 **/

function matrix(matrix) {
    const target = [];
    let i = 0, j = 0, k = matrix[0].length - 1;
    while (i < matrix.length) {
        const row = matrix[i];
        target.push([]);
        target[i][j] = row[k];
        target[i][k] = row[j];
        j++;
        k--;
        i++;
    };
    // i = 0,j = k = 1;
    // while (i < matrix.length) {
    //     //  console.log(i,j,k);
    // }
    return target;
};

console.log(matrix(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
));
//0,0 => 0,2 0,1 => 1,2 0,2 => 2,2

//C,D,A,B,B,A,A,D,B,C,B,D,D,A,B,D,C,B,C,A,B,A,D,C,B,B,A