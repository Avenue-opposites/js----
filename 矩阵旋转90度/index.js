/**
 * @format
 * @param {number[][]}
 * @return {number[][]}
 */

function rotate(matrix) {
    let temp;
    let i = 0,x = matrix.length - 1;
    while( i < matrix.length - 1 && x > 0) {
      let j = 0,y = matrix.length - 1;
      while( j < (matrix.length - 1 - i) && y > i) {
        temp = matrix[i][j];
        matrix[i][j] = matrix[y][x];
        matrix[y][x] = temp;
        j++;
        y--;
      }
      i++;
      x--;
    }
    i = 0;
    x = matrix.length - 1;
    while(i < x ) {
        for(let j = 0;j < matrix.length;j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[x][j];
            matrix[x][j] = temp;
        }
        i++;
        x--;
    }
    return matrix;
}

console.log(
    rotate(
        [
            [1, 2, 3], //[9,6,3] [7,4,1]
            [4, 5, 6], //[8,5,2] [8,5,2]
            [7, 8, 9], //[7,4,1] [9,6,3]
        ], //0,0 => 2,2  0,1 => 1,2  1,0 => 2,1
    )
);


  