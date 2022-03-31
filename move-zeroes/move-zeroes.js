/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
    let iterator = 0;
    let nonzero = 0;
    for(let nonzero = 0; nonzero<len; nonzero++){
        if(nums[nonzero] !== 0){
            if(nums[iterator] === 0){
                nums[iterator] = nums[nonzero];
                nums[nonzero] = 0;
            }
            iterator++;
        }
    }
    
    
};