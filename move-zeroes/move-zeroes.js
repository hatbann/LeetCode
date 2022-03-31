/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
    let answer = [];
    let idxlen = 0;
    for(let i = 0; i<len; i++){
        if(nums[i] !==0){
            answer.push(nums[i]);
            idxlen++;
        }
    }
    for(let i = 0; i<len - idxlen; i++){
        answer.push(0);
    }
    for(let i = 0; i<len; i++){
        nums[i] = answer[i];
    }
    
};