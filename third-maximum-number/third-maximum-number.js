/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let len = nums.length;
    nums.sort(function(a,b){
        return b-a;
    })
    console.log(nums);
    if(len<3){
        return nums[0];
    }
    
    let max = nums[0];
    let num = 1;
    for(let i = 1; i<len; i++){
        if(nums[i] !== max){
            max = nums[i];
            num++
        }
        if(num ===3){
            return nums[i];
        }
    }
    return nums[0];
};