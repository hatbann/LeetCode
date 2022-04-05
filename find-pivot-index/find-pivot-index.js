/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let answer = -1;
    let len = nums.length;
    for(let i = 0; i<len; i++){
        let sumleft = 0, sumright = 0;
        let pivot = nums[i];
        for(let j = 0; j<i; j++){
            sumleft += nums[j];
        }
        for(let j = i+1; j<len; j++){
            sumright += nums[j];
        }
        if(sumleft === sumright){
            answer = i;
            break;
        }
            
    }
    return answer;
    
};