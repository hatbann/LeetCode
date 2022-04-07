/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    let slowpt = 0;
    
    for(let i = 0; i<len; i++){
        if(nums[i] !== val){
            nums[slowpt] = nums[i];
            slowpt++;
        }
    }
    
    for(let i = slowpt; i<len; i++){
        nums.pop();
    }
    
    return slowpt;
};