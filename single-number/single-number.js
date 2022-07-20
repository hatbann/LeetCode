/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr = nums.sort((a,b) => a-b);
    let len = arr.length;
    
    if(len === 1) return nums[0];
    
    for(let i = 0; i<len; i++){
        if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) return arr[i];
    }
    
};