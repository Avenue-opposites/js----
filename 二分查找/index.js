/**
 * @param {number[]} array
 * @param {number} target
 * @param {number} start
 * @param {number} end
 * @return {number}
*/

function binarySearch(array,target,start,end) {
    let result;
    //中值
    let medium = Math.floor((start + end) / 2);
    let current = array[medium];
    //判断是否数组超出边界
    if(start > end) {
       return -1;
    }
    //相等
    if(target === current) {
        result = medium;
    //left
    }else if(target < current) {
        result = binarySearch(array,target,start,medium - 1);
    //right
    }else if(target > current) {
        result = binarySearch(array,target,medium + 1,end);
    }
    return result;
};

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(arr,1,0,9));