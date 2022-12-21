/**
 * @param {number[]} nums //nums为无重复元素的升序排列数组
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        //判断当前值是否等于目标值
        if(nums[i] === target) return i;
        //然后判断当前值是否大于目标值
        if(target < nums[i]) return i;
    };
    //以上没有匹配到说明,目标值大于最大值,应该插入到最后
    return nums.length;
};


console.log(searchInsert([1,3,4,5,6],5));;